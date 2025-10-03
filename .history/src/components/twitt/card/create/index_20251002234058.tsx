import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
export default function DialogDemo() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
            Add Twitt
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Twitt</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
