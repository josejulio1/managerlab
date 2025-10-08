interface Props {
    className?: string
    text: string
}

export default function ListItem({ className, text }: Props) {
    return (
        <li
            className="flex items-center gap-4"
        >
            <div className={`w-2 h-2 rounded-full ${className ? className : ''}`}></div>
            <p className="text-white text-[18px]">{text}</p>
        </li>
    );
}