import { SocialNetwork, UserSocialNetwork } from "../../../../../../generated/prisma"
import { SocialNetworkDto } from "../schemas/social-network.schema"

export function socialNetworkAdapter(socialNetwork: {
    id: SocialNetwork['id']
    icon: SocialNetwork['icon']
    url: SocialNetwork['url']
    users?: Array<Pick<UserSocialNetwork, 'username'>>
}): SocialNetworkDto {
    return {
        id: socialNetwork.id,
        icon: socialNetwork.icon,
        url: socialNetwork.url,
        username: socialNetwork.users?.[0]?.username
    }
}