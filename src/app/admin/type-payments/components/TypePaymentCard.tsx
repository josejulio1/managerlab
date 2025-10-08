import { TypePayment } from "../../../../../generated/prisma";
import Card from "../../components/card/Card";
import { deleteTypePayment } from "../actions/action";

interface Props {
    typePayment: TypePayment
}

export default function TypePaymentCard({ typePayment }: Props) {
    return (
        <Card
            id={typePayment.id}
            editHref="/admin/type-payments"
            deleteServerAction={deleteTypePayment}
        >
            <h4 className="text-white text-3xl font-medium max-lg:text-center">{typePayment.name}</h4>
        </Card>
    );
}