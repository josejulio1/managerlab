'use client';

import Card from "../../components/card/Card";
import { deleteValoration } from "../actions/action";
import ReactStars from "react-stars";
import { CustomerValorationDto } from "../adapters/customer-valoration.adapter";

interface Props {
    customerValoration: CustomerValorationDto
}

export default function ValorationCard({ customerValoration }: Props) {
    return (
        <Card
            className="flex flex-col gap-1"
            editHref="/admin/valorations"
            id={customerValoration.valoration.id}
            deleteServerAction={deleteValoration}
        >
            <h4 className="text-white text-3xl font-medium">{customerValoration.customerName}</h4>
            <p className="text-[var(--color-surface)]">{customerValoration.valoration.review}</p>
            <ReactStars
                count={5}
                value={customerValoration.valoration.stars}
                edit={false}
            />
        </Card>
    );
}