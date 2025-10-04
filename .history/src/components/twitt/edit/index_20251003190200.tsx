import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TwittFormValues, TwittResponse, TwittTypes } from "@/types/twitt";
import { twittUpdateService } from "@/services/twitt";
import { TV_TWITT_VIEW } from "@/reactQueryProvider/queryKeys";

type TwittEditProps = {
  open: boolean;
  onOpenChange: (b: boolean) => void;
  twitt: TwittTypes;
};

export default function TwittEdit({
  open,
  onOpenChange,
  twitt,
}: TwittEditProps) {
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<TwittFormValues>({
    defaultValues: {
      description: twitt.description,
    },
  });

  const mutation = useMutation<TwittResponse, Error, TwittFormValues>({
    mutationFn: (data) => twittUpdateService(twitt._id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TV_TWITT_VIEW, twitt._id] });
      onOpenChange(false);
    },
  });

  const onSubmit = handleSubmit((values) => mutation.mutate(values));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Twitt</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <Textarea {...register("description", { required: true })} />
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
