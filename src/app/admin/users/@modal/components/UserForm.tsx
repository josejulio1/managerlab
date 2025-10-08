import Modal from "@/app/admin/components/Modal";
import { FieldValues } from "react-hook-form";
import Form from "@/components/form/Form";
import { toast } from "react-toastify";
import Input from "@/components/form/items/Input";
import File from "@/components/form/items/File";
import SocialNetworks from "@/components/form/items/social-network/SocialNetworks";
import { useContext } from "react";
import { AdminContext } from "@/context/admin.context";
import ActionResponse from "@/app/admin/interfaces/action";

interface Props<ServerActionParams> {
    title: string
    submitButtonText: string
    initialImageUrl?: string
    serverAction: (data: ServerActionParams) => Promise<ActionResponse>
}

export default function UserForm<ServerActionParams extends FieldValues>({ title, submitButtonText, initialImageUrl, serverAction }: Props<ServerActionParams>) {
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
                <Input
                    type="text"
                    name="specialty"
                    placeholder="Specialty"
                    autoComplete="off"
                />
                <SocialNetworks
                    name="socialNetworks"
                    label="Socials Networks"
                />
                <File
                    label="Image"
                    name="image"
                    initialUrl={initialImageUrl ? `/api/uploads/team/${initialImageUrl}` : undefined}
                />
            </Form>
        </Modal>
    );
}