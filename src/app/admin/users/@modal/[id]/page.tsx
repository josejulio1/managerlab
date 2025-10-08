import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isInt } from "validator";
import EditUserForm from "../components/EditUserForm";
import { socialNetworkAdapter } from "@/components/form/items/social-network/adapters/social-network.adapter";

interface Props {
    params: Promise<{ id: string }>
}

export default async function EditUserPage({ params }: Props) {
    const { id } = await params;
    if (!isInt(id)) {
        redirect('/admin/users');
    }
    const idInt = parseInt(id);
    const user = await prisma.user.findUnique({
        select: {
            id: true,
            name: true,
            specialty: true,
            image: true
        },
        where: {
            id: idInt
        }
    });
    if (!user) {
        redirect('/admin/users');
    }

    const socialNetworks = await prisma.socialNetwork.findMany({
        select: {
            id: true,
            icon: true,
            url: true,
            users: {
                select: {
                    username: true
                },
                where: {
                    userId: idInt
                }
            }
        }
    });

    return (
        <EditUserForm
            user={user}
            socialNetworks={socialNetworks.map(socialNetwork => socialNetworkAdapter(socialNetwork))}
        />
    );
}