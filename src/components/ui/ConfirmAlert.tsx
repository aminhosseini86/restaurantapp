import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog";
import Button from "./button";

interface In_ConfirmAlertProps {
  open: boolean;
  setOpen: (o: boolean) => void;
  title: string;
  description?: string;
  pending: boolean;
  approveHandler: () => void;
}

function ConfirmAlert({
  open,
  setOpen,
  title,
  description,
  pending,
  approveHandler,
}: In_ConfirmAlertProps) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4 text-start">
            {title}
          </AlertDialogTitle>

          {description && (
            <AlertDialogDescription className="text-start">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button color="danger">رد کردن</Button>
          </AlertDialogCancel>

          <Button color="success" disabled={pending} onClick={approveHandler}>
            تایید
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmAlert;
