import { GetCategory } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async() => {
    const categories = await GetCategory();
    
    return (
        <div className="mb-6 space-x-3">
            <Link href={"/all-photos"}>
            <Button variant="outline">
                All
            </Button></Link>
            {
                categories.map(category => 
                    <Link
                    key={category.id}
                    href={`?category=${category.name.toLowerCase()}`}>
                        <Button variant="outline">
                            {category.name}
                        </Button>
                    </Link>
                )
               
            }
        </div>
    );
};

export default Category;