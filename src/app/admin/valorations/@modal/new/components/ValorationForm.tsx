import Modal from "@/app/admin/components/Modal";
import Form from "@/components/form/Form";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import TextArea from "@/components/form/items/TextArea";
import SelectForm from "@/components/form/items/select/SelectForm";
import { Customer } from "../../../../../../../generated/prisma";
import Rating from "@/components/form/items/Rating";
import ActionResponse from "@/app/admin/interfaces/action";

interface Props<ServerActionParams> {
    title: string
    submitButtonText: string
    customers: Array<Pick<Customer, 'id' | 'name'>>
    serverAction: (data: ServerActionParams) => Promise<ActionResponse>
}

export default function ValorationForm<ServerActionParams extends FieldValues>({ title, submitButtonText, customers, serverAction }: Props<ServerActionParams>) {
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
                    },
                    onFailure: error => {
                        toast.error(error);
                    }
                }}
            >
                <TextArea
                    name="review"
                    placeholder="Review"
                    rows={3}
                />
                <SelectForm
                    name="customerId"
                    label="Customers"
                    items={customers.map(({ id, name }) => ({ label: name, value: id }))}
                />
                <Rating
                    name="stars"
                />
            </Form>
        </Modal>
    );
}