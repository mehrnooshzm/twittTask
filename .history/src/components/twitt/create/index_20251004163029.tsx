import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useCreateTwitt } from "@/hook/useCreateTwitt";
import type { TwittFormValues } from "@/types/twitt";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { maxTwittLength } from "@/utils/common";
export default function DialogDemo() {
  const [open, setOpen] = useState(false);
  const { mutate } = useCreateTwitt(() => setOpen(false));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TwittFormValues>();

  const onSubmit = (data: TwittFormValues) => {
    mutate(data);
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
            Add Twitt
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add Twitt</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setOpen(false)}
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
    </div>
  );
}
