import { EditorContent, mergeAttributes, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar/Toolbar";
import { useFormContext } from "react-hook-form";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import FormElement from "../../FormElement";
import './RichText.css';

const classes: Record<number, string> = {
    1: 'text-4xl',
    2: 'text-2xl'
};

interface Props {
    label: string
    name: string
}

export default function RichText({ label, name }: Props) {
    const { setValue, watch } = useFormContext();

    const editor = useEditor({
        extensions: [
            StarterKit,
            Heading.configure({ levels: [1, 2] }).extend({
                renderHTML({ node, HTMLAttributes }) {
                    const hasLevel = this.options.levels.includes(node.attrs.level);
                    const level = hasLevel ? node.attrs.level : this.options.levels[0];

                    return [
                        `h${level}`,
                        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                            class: `${classes[level]} font-bold`,
                        }),
                        0
                    ]
                }
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph']
            })
        ],
        content: watch(name),
        immediatelyRender: false,
        onUpdate: () => {
            if (editor) {
                setValue(name, editor.getHTML());
            }
        }
    });

    return (
        <FormElement
            label={label}
            name={name}
            render={() => (
                <article className="flex flex-col gap-2">
                    {editor && <Toolbar editor={editor} />}
                    <EditorContent
                        className="text-white border border-white/20 rounded-md p-2"
                        editor={editor}
                    />
                    {editor && <p className="text-white">Characters: <span className="font-medium">{editor.getText().length}</span></p>}
                </article>
            )}
        />
    );
}