import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps{
    category: Category;
}

const CategoryItem = ( {category } : CategoryItemProps) => {
    return ( 
        <div className="flex mx-auto items-center justify-center hover:bg-orange-500 cursor-pointer duration-300 gap-3 py-3 px-4 bg-white w-[200px] shadow-md rounded-full">
            <Image src={category.imageUrl} alt={category.name} height={40} width={40} />
            <span className="text-sm font-semibold hidden lg:block">{category.name}</span>
        </div>
     );
}
 
export default CategoryItem;