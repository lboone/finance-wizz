import { z } from "zod";
import { Trash, Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { insertAccountSchema } from "@/db/schema";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof formSchema>;

type Props = {
    id?: string;
    defaultValues?: FormValues;
    onSubmit: (values: FormValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
}

export const AccountForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled,
}: Props) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const handleSubmit =(values: FormValues) => {
        onSubmit(values); 
    }

    const handleDelete = () => {
        onDelete?.();
    }   
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="spacy-y-4 pt-4 flex flex-col gap-4">
                <FormField 
                    name="name"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="e.g. Cash, Bank, Credit Card"
                                    disabled={disabled}
                                    autoComplete="on"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button className="w-full" disabled={disabled}>{id? "Save Changes" : "Create Account"}</Button>

                {!!id && (
                    <Button type="button" disabled={disabled} onClick={handleDelete} className="w-full" variant="outline" ><Trash2 className="size-4 mr-2"/> Delete Account</Button>
                )}
            </form>
        </Form>
    )
};