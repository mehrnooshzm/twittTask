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
import { maxTwittLength } from "@/utils/common";

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TwittFormValues>({
    defaultValues: {
      description: twitt.description,
    },
  });

  const mutation = useMutation<TwittResponse, Error, TwittFormValues>({
    mutationFn: (data) => twittUpdateService(twitt._id, data),
    onSuccess: (data) => {
      console.log("Updated data:", data);
      queryClient.invalidateQueries({ queryKey: [TV_TWITT_VIEW, data._id] });
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
          <Textarea
            id="description"
            {...register("description", {
              required: "this field is required",
              maxLength: {
                value: maxTwittLength,
                message: `maximum ${maxTwittLength} characters are allowed`,
              },
            })}
          />
          {errors.description && (
            <span className="text-sm text-red-500">
              {errors.description.message}
            </span>
          )}
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
