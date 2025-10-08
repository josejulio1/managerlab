import Modal from "@/app/admin/components/Modal";
import ActionResponse from "@/app/admin/interfaces/action";
import Form from "@/components/form/Form";
import Input from "@/components/form/items/Input";
import { AdminContext } from "@/context/admin.context";
import { useContext } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

interface Props<ServerActionParams> {
    title: string
    submitButtonText: string
    serverAction: (data: ServerActionParams) => Promise<ActionResponse>
}

export default function TypePaymentForm<ServerActionParams extends FieldValues>({ title, submitButtonText, serverAction }: Props<ServerActionParams>) {
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
                    autoComplete="off"
                />
            </Form>
        </Modal>
    );
}