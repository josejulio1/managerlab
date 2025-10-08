import SocialNetworkIcon from "@/components/SocialNetworkIcon";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import { UserSocialNetworkDto } from "../adapter/user-social-network.adapter";

interface Props {
    user: UserSocialNetworkDto
}

export default function TeamMember({ user }: Props) {
    return (
        <article className="bg-[#212121] transition duration-[.5s] flex justify-between max-md:flex-col max-md:items-center max-md:gap-4 md:px-4 md:h-[170px] max-md:p-8 rounded-2xl hover:bg-[var(--main-color)] hover:[&_h2]:text-[#212121] hover:[&_p]:text-[#212121] hover:[&_a]:border-[#212121] hover:[&_svg]:invert overflow-hidden">
            <section className="flex max-md:flex-col max-md:items-center md:gap-12 max-md:gap-4">
                <Image
                    className="grayscale md:basis-3xl md:object-cover md:!w-[420px] max-md:bg-[var(--bg-color)]"
                    src={`/api/uploads/team/${user.image}`}
                    alt={user.name}
                    width={0}
                    height={0}
                    layout="responsive"
                    sizes="100vw"
                />
                <section className="flex flex-col justify-center shrink-0">
                    <h2 className="transition duration-[.5s] text-white md:text-5xl max-md:text-[30px] font-medium max-md:text-center">{user.name}</h2>
                    <p className="transition duration-[.5s] text-sm text-[var(--color-surface)] max-md:text-center">{user.specialty}</p>
                </section>
            </section>
            {
                user.socialNetworks.length > 0 && (
                    <section className="flex gap-4 md:p-4">
                        {
                            user.socialNetworks.map(socialNetwork => {
                                const Icon = FaIcons[socialNetwork.icon as keyof typeof FaIcons];
                                return (
                                    <SocialNetworkIcon
                                        key={socialNetwork.id}
                                        href={`${socialNetwork.url}/${socialNetwork.username}`}
                                        icon={<Icon />}
                                        className="duration-[.5s] bg-[var(--main-theme)] hover:bg-[#7000da]"
                                    />
                                );
                            })
                        }
                    </section>
                )
            }
        </article>
    );
}