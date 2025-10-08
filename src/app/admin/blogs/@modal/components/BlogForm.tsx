import Modal from "@/app/admin/components/Modal";
import ActionResponse from "@/app/admin/interfaces/action";
import Form from "@/components/form/Form";
import File from "@/components/form/items/File";
import Input from "@/components/form/items/Input";
import RichText from "@/components/form/items/rich-text/RichText";
import TextArea from "@/components/form/items/TextArea";
import { AdminContext } from "@/context/admin.context";
import { useContext } from "react";
import { FieldValues } from "react-hook-form"
import { toast } from "react-toastify";

interface Props<ServerActionParams> {
    title: string
    submitButtonText: string
    initialImageUrl?: string
    serverAction: (data: ServerActionParams) => Promise<ActionResponse>
}

export default function BlogForm<ServerActionParams extends FieldValues>({ title, submitButtonText, initialImageUrl, serverAction }: Props<ServerActionParams>) {
    const { dispatch } = useContext(AdminContext);

    return (
        <Modal
            className="max-sm:w-full max-md:w-xl max-lg:w-3xl max-xl:w-5xl xl:w-7xl"
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
                    name="title"
                    placeholder="Title"
                    autoComplete="off"
                />
                <TextArea
                    name="shortDescription"
                    placeholder="Short description"
                    rows={3}
                />
                <RichText
                    label="Description"
                    name="description"
                />
                <File
                    label="Image"
                    name="image"
                    initialUrl={initialImageUrl ? `/api/uploads/blogs/${initialImageUrl}` : undefined}
                />
            </Form>
        </Modal>
    );
}