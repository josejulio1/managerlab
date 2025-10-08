import { Category } from "../../../../../generated/prisma";
import Card from "../../components/card/Card";
import { deleteCategory } from "../actions/action";

interface Props {
    category: Pick<Category, 'id' | 'name' | 'description'>
}

export default function CategoryCard({ category }: Props) {
    return (
        <Card
            className="flex flex-col gap-1"
            id={category.id}
            editHref="/admin/categories"
            deleteServerAction={deleteCategory}
        >
            <h4 className="text-white text-3xl font-medium">{category.name}</h4>
            <p className="text-[var(--color-surface)] text-sm">{category.description}</p>
        </Card>
    );
}