import Image from "next/image";
import { User } from "../../../../../generated/prisma";
import Card from "../../components/card/Card";
import { deleteUser } from "../actions/action";

interface Props {
    user: User
}

export default function UserCard({ user }: Props) {
    return (
        <Card
            className="flex max-lg:flex-col max-lg:gap-4 lg:gap-12"
            editHref="/admin/users"
            id={user.id}
            deleteServerAction={deleteUser}
        >
            <Image
                className="basis-2 grow-0"
                src={`/api/uploads/team/${user.image}`}
                alt={user.name}
                width={150}
                height={0}
            />
            <section className="flex flex-col justify-center gap-1 self-center">
                <h4 className="text-white text-3xl font-medium max-lg:text-center">{user.name}</h4>
                <p className="text-[var(--color-surface)] max-lg:text-center">{user.specialty}</p>
            </section>
        </Card>
    );
}