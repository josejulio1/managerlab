import { useFormContext } from "react-hook-form";
import * as FaIcons from "react-icons/fa";
import { SocialNetworkDto } from "./schemas/social-network.schema";
import Link from "next/link";

interface Props {
    className?: string
    name: string
    index: number
}

export default function SocialNetworkItem({ className, name, index }: Props) {
    const { register, watch } = useFormContext();
    const socialNetwork = watch(`${name}[${index}]`) as SocialNetworkDto;

    
    const Icon = FaIcons[socialNetwork.icon as keyof typeof FaIcons];

    return (
        <li className="flex items-center gap-4">
            <Link
                className="border border-white/20 p-2 rounded-lg cursor-pointer transition hover:bg-white/10"
                href={`${socialNetwork.url}/${socialNetwork.username}`}
                target="_blank"
            >
                <Icon
                    className="text-white"
                    size={30}
                />
            </Link>
            <input
                className={className}
                {...register(`${name}[${index}].username`)}
                type="text"
            />
        </li>
    );
}