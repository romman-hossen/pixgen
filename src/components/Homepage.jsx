import { GetData } from "@/lib/data";
import PhotoCard from "./PhotoCard";
import { Button } from "@heroui/react";
import Link from "next/link";

const Homepage = async() => {
    const data = await GetData();
    const topPhotos = data.slice(0, 8)
    
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className='text-3xl font-bold my-10'>This is Homepage</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    topPhotos.map (photos => <PhotoCard key={photos.id} photosData={photos}></PhotoCard>)
                }

         </div> 
         <div className="text-center mt-10">
            <Link href="/all-photos">
         <Button className="text-balance md:text-xl lg:text-2xl lg:p-6">View all data</Button>
            </Link>

         </div>

        </div>
    );
};

export default Homepage;