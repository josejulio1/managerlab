import Modal from "@/app/admin/components/Modal";
import Form from "@/components/form/Form";
import File from "@/components/form/items/File";
import Input from "@/components/form/items/Input";
import SelectForm from "@/components/form/items/select/SelectForm";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { Category } from "../../../../../../generated/prisma";
import { useContext } from "react";
import { AdminContext } from "@/context/admin.context";
import ActionResponse from "@/app/admin/interfaces/action";

interface Props<ServerActionParams> {
    title: string
    submitButtonText: string
    categories: Array<Pick<Category, 'id' | 'name'>>
    initialImageUrl?: string
    serverAction: (data: ServerActionParams) => Promise<ActionResponse>
}

export default function CustomerForm<ServerActionParams extends FieldValues>({ title, submitButtonText, categories, initialImageUrl, serverAction }: Props<ServerActionParams>) {
    const { dispatch } = useContext(AdminContext);

    return (
        <Modal
            title={title}
        >
            <Form
                submitButtonText={submitButtonText}
                serverAction={serverAction}
                handlers={{
                    onSuccess: ({ message }) => {
                        toast.success(message);
                        dispatch({ type: 'IS-MODAL-OPEN', payload: false });
                    },
                    onFailure: error => {
                        toast.error(error);
                    }
                }}
            >
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="name"
                />
                <SelectForm
                    label="Categories"
                    name="categories"
                    items={categories.map(({ id, name }) => ({ label: name, value: id }))}
                    isMultiple
                />
                <File
                    label="Image"
                    name="image"
                    initialUrl={initialImageUrl ? `/api/uploads/customers/${initialImageUrl}` : undefined}
                />
            </Form>
        </Modal>
    );
}