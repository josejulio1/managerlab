import { BeatLoader } from "react-spinners";

interface Props {
    text: string
    className?: string
    isLoading: boolean
}

export default function SubmitButton({ text, className, isLoading }: Props) {
    return (
        <button
            type="submit"
            className={`flex justify-center items-center px-6 py-2 h-12 cursor-pointer bg-white rounded-full self-start hover:bg-[var(--main-color)] transition duration-[.2s] ${className ? className : ''} max-md:w-full`}
            disabled={isLoading}
        >
            {
                isLoading
                    ? <BeatLoader />
                    : text
            }
        </button>
    );
}