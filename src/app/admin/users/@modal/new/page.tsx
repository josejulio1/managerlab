import NewUserForm from "../components/NewUserForm";
import { prisma } from "@/lib/prisma";
import { socialNetworkAdapter } from "@/components/form/items/social-network/adapters/social-network.adapter";

export default async function NewUserPage() {
    const socialNetworks = await prisma.socialNetwork.findMany({
        select: {
            id: true,
            icon: true,
            url: true
        }
    });

    return (
        <NewUserForm
            socialNetworks={socialNetworks.map(socialNetwork => socialNetworkAdapter(socialNetwork))}
        />
    );
}