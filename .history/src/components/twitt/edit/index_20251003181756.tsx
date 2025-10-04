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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { TwittResponse, TwittFormValues } from "@/types/twitt";
import { twittCreateService, twittGetItemService } from "@/services/twitt";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useParams } from "@tanstack/react-router";
import { routeTwittView } from "@/routes/routePaths";
import { TV_TWITT_VIEW, TL_TWITT_LIST } from "@/reactQueryProvider/queryKeys";

export default function DialogDemo() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const { id } = useParams({ from: routeTwittView });

  // get single twitt
  const { data, isLoading } = useQuery({
    queryKey: [TV_TWITT_VIEW, id],
    queryFn: () => twittGetItemService(id),
  });

  const { mutate } = useMutation<TwittResponse, Error, TwittFormValues>({
    mutationFn: (formData: TwittFormValues) => twittCreateService(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TL_TWITT_LIST] });
      setOpen(false);
    },
  });

  // form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TwittFormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        description: data.description,
      });
    }
  }, [data, reset]);

  const max = 280;
  const onSubmit = (formData: TwittFormValues) => {
    mutate(formData);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
          Edit Twitt
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit Twitt</DialogTitle>
          </DialogHeader>

          {isLoading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : (
            <div className="grid gap-4 py-4">
              <Input
                type="text"
                {...register("title", { required: "title is required" })}
              />
              <Textarea
                {...register("description", {
                  required: "this field is required",
                  maxLength: {
                    value: max,
                    message: `maximum ${max} characters are allowed`,
                  },
                })}
              />
              {errors.description && (
                <span className="text-sm text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
          )}

          <DialogFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
