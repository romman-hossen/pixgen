import { GetCategory } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async({categoryParams}) => {
    const categories = await GetCategory();
    console.log(categoryParams,"category params")
    
    return (
        <div className="mb-6 space-x-3 flex flex-wrap items-center justify-center gap-2 md:block" >
            <Link href={"/all-photos"}>
            <Button variant={!categoryParams ? "primary" : "outline"}>
                All
            </Button></Link>
            {
                categories.map( (category) =>{
                    const isActive = categoryParams === category.name.toLowerCase();
                    return(
                    <Link 
                    key={category.id}
                    href={`?category=${category.name.toLowerCase()}`}>
                        <Button variant={isActive ? "primary" : "outline"}>
                            {category.name}
                        </Button>
                    </Link>
                    );
                })           
            }
        </div>
    );
};

export default Category;