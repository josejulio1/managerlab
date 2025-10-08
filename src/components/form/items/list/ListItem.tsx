import { useFormContext } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

interface Props {
    index: number
    name: string
    onRemove: () => void 
}

export default function ListItem({ index, name, onRemove }: Props) {
    const { watch } = useFormContext();
    const text = watch(`${name}[${index}].text`);

    return (
        <li className="flex gap-4">
            <button
                type="button"
                className="cursor-pointer"
                onClick={onRemove}
            >
                <FaTrash className="text-red-500" />
            </button>
            <p className="text-white">{text}</p>
        </li>
    );
}