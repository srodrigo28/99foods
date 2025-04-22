import { db } from "@/lib/prisma";
import CategoryItem from "./catyegory-item";

 const CategoryList = async () => {
    const categories = await db.category.findMany({})
    return ( 
        <div className="flex overflow-scroll p-5 gap-2">
            {categories.map(category => (
                <CategoryItem key={category.id} category={category} />
            ))}   
        </div>
     );
}
 
export default CategoryList;