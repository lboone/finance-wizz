import { z } from "zod";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { insertAccountSchema } from "@/db/schema";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { AccountForm } from "./account-form";
import { useCreateAccount } from "../api/use-create-account";

const NewAccountSheet = () => {
  const formSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof formSchema>;

  const { isOpen,  onClose } = useNewAccount();

  const mutation = useCreateAccount();

  const onSubmit = (values: FormValues ) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>Create a new account to track your transactions.</SheetDescription>
        </SheetHeader>
        <AccountForm 
          defaultValues={{name: ""}}
          onSubmit={onSubmit}
          disabled={mutation.isPending} />
      </SheetContent>
    </Sheet>
  )
}

export default NewAccountSheet