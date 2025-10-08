import { prisma } from "@/lib/prisma";
import CrudPanel from "../../components/crud-panel/CrudPanel";
import UserCard from "./UserCard";

export default async function Users() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            image: true,
            specialty: true
        }
    });

    return (
        <CrudPanel
            newHref="/admin/users"
            items={users}
            render={user => (
                <UserCard
                    key={user.id}
                    user={user}
                />
            )}
        />
    );
}