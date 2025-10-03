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
import { useMutation } from "@tanstack/react-query";
import type { TwiitResponse, TwittFormValues } from "@/types/twiit";
import { twittService } from "@/services/twiit";
import { useForm } from "react-hook-form";
export default function DialogDemo() {
  const { mutate } = useMutation<TwiitResponse, Error, TwittFormValues>({
    mutationFn: (data: TwittFormValues) => {
      return twittService(data);
    },
    onSuccess: (data) => {
      const token = data?.token;
      if (!token) return;
    },
  });

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
      <Dialog>
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
              <Textarea />
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
