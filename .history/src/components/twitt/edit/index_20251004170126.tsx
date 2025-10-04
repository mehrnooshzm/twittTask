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
import { useEditTwitt } from "@/hook/useEditTwitt";
import { maxTwittLength } from "@/utils/common";
import type { TwittFormValues, TwittTypes } from "@/types/twitt";
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TwittFormValues>({
    defaultValues: {
      description: twitt.description,
    },
  });

  const { mutate } = useEditTwitt(twitt, onOpenChange);

  const onSubmit = handleSubmit((values) => mutate(values));

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
