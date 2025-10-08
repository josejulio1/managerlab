import { prisma } from "@/lib/prisma";
import CrudPanel from "../../components/crud-panel/CrudPanel";
import CategoryCard from "./CategoryCard";

export default async function Categories() {
    const categories = await prisma.category.findMany({
        orderBy: {
            id: 'asc'
        }
    });

    return (
        <CrudPanel
            newHref="/admin/categories"
            items={categories}
            render={category => (
                <CategoryCard
                    key={category.id}
                    category={category}
                />
            )}
        />
    );
}