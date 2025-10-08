import { Editor, useEditorState } from "@tiptap/react"
import { FaAlignCenter, FaAlignLeft, FaAlignRight, FaBold, FaItalic } from "react-icons/fa";
import { LuHeading1, LuHeading2 } from "react-icons/lu";
import IToolbarButtonGroup from "./interfaces/toolbar-button-group";
import ToolbarButtonGroup from "./ToolbarButtonGroup";

interface Props {
    editor: Editor
}

export default function Toolbar({ editor }: Props) {
    const editorState = useEditorState({
        editor,
        selector: ({ editor }) => ({
            isBold: editor.isActive('bold'),
            isItalic: editor.isActive('italic'),
            isHeading1: editor.isActive('heading', { level: 1 }),
            isHeading2: editor.isActive('heading', { level: 2 }),
            isTextAlignLeft: editor.isActive({ textAlign: 'left' }),
            isTextAlignCenter: editor.isActive({ textAlign: 'center' }),
            isTextAlignRight: editor.isActive({ textAlign: 'right' }),
        })
    });

    const toolbarButtonsGroup: IToolbarButtonGroup[] = [
        {
            toolbarButtons: [
                {
                    icon: <FaBold />,
                    isActive: editorState.isBold,
                    command: () => editor.chain().focus().toggleBold().run()
                },
                {
                    icon: <FaItalic />,
                    isActive: editorState.isItalic,
                    command: () => editor.chain().focus().toggleItalic().run()
                }
            ]
        },
        {
            toolbarButtons: [
                {
                    icon: <LuHeading1 />,
                    isActive: editorState.isHeading1,
                    command: () => editor.chain().focus().toggleHeading({ level: 1 }).run()
                },
                {
                    icon: <LuHeading2 />,
                    isActive: editorState.isHeading2,
                    command: () => editor.chain().focus().toggleHeading({ level: 2 }).run()
                },
            ]
        },
        {
            toolbarButtons: [
                {
                    icon: <FaAlignLeft />,
                    isActive: editorState.isTextAlignLeft,
                    command: () => editor.chain().focus().setTextAlign('left').run()
                },
                {
                    icon: <FaAlignCenter />,
                    isActive: editorState.isTextAlignCenter,
                    command: () => editor.chain().focus().setTextAlign('center').run()
                },
                {
                    icon: <FaAlignRight />,
                    isActive: editorState.isTextAlignRight,
                    command: () => editor.chain().focus().setTextAlign('right').run()
                }
            ]
        }
    ];

    return (
        <nav className="bg-white/5 border border-white/20 rounded-md p-2 flex items-center flex-wrap">
            {
                toolbarButtonsGroup.map(({ toolbarButtons }, i) => (
                    <ToolbarButtonGroup
                        key={i}
                        toolbarButtons={toolbarButtons}
                    />
                ))
            }
        </nav>
    );
}