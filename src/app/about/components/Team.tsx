import { UserSocialNetworkDto } from "../adapter/user-social-network.adapter";
import TeamMember from "./TeamMember";

interface Props {
    usersSocialNetworks: UserSocialNetworkDto[]
}

export default function Team({ usersSocialNetworks }: Props) {
    return (
        <section className="flex flex-col gap-2">
            {
                usersSocialNetworks.map(userSocialNetwork => (
                    <TeamMember
                        key={userSocialNetwork.id}
                        user={userSocialNetwork}
                    />
                ))
            }
        </section>
    );
}