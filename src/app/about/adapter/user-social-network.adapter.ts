import { SocialNetwork, User, UserSocialNetwork } from "../../../../generated/prisma";

export interface UserSocialNetworkDto {
    id: User['id']
    name: User['name']
    specialty: User['specialty']
    image: User['image']
    socialNetworks: Array<Pick<SocialNetwork, 'id' | 'url' | 'icon'> & { username: UserSocialNetwork['username'] }>
}

export default function userSocialNetworkAdapter(user: {
    id: User['id']
    name: User['name']
    specialty: User['specialty']
    image: User['image']
    socialNetworks: Array<{ socialNetwork: Pick<SocialNetwork, 'id' | 'url' | 'icon'>, username: UserSocialNetwork['username'] }>
}): UserSocialNetworkDto {
    return {
        id: user.id,
        name: user.name,
        specialty: user.specialty,
        image: user.image,
        socialNetworks: user.socialNetworks.map(({ socialNetwork, username }) => ({ ...socialNetwork, username }))
    }
}