import Link from "next/link";
import { FaPlus } from "react-icons/fa";

interface Props {
    href: string
}

export default function NewButton({ href }: Props) {
    return (
        <Link
            href={`${href}/new`}
            className="px-4 py-2 bg-white flex justify-center items-center gap-2 rounded-xl cursor-pointer"
        >
            <FaPlus />
            <p>New</p>
        </Link>
    );
}