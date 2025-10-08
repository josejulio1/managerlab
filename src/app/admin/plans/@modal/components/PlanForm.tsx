import Modal from "@/app/admin/components/Modal";
import { Category, TypePayment } from "../../../../../../generated/prisma";
import Form from "@/components/form/Form";
import { toast } from "react-toastify";
import { FieldValues } from "react-hook-form";
import SelectForm from "@/components/form/items/select/SelectForm";
import Input from "@/components/form/items/Input";
import NumberInput from "@/components/form/items/NumberInput";
import List from "@/components/form/items/list/List";
import { useContext } from "react";
import { AdminContext } from "@/context/admin.context";
import ActionResponse from "@/app/admin/interfaces/action";

interface Props<ServerActionParams> {
    title: string
    submitButtonText: string
    categories: Array<Pick<Category, 'id' | 'name'>>
    typePayments: Array<Pick<TypePayment, 'id' | 'name'>>
    serverAction: (data: ServerActionParams) => Promise<ActionResponse>
}

export default function PlanForm<ServerActionParams extends FieldValues>({ title, submitButtonText, categories, typePayments, serverAction }: Props<ServerActionParams>) {
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
                    placeholder="Name"
                    name="name"
                    autoComplete="name"
                />
                <NumberInput
                    name="price"
                    placeholder="Price"
                    min={0.01}
                    step={0.1}
                />
                <List
                    name="descriptions"
                    placeholder="Description (Press intro to add)"
                />
                <SelectForm
                    label="Category"
                    name="categoryId"
                    items={categories.map(({ id, name }) => ({ label: name, value: id }))}
                />
                <SelectForm
                    label="Type Payment"
                    name="typePaymentId"
                    items={typePayments.map(({ id, name }) => ({ label: name, value: id }))}
                />
            </Form>
        </Modal>
    );
}