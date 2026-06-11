import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaHeart } from "react-icons/fa";

const PhotoCard = ({photosData}) => {
    
    console.log(photosData)
    return (

        <Card className="border rounded-xl">
            <div>
                {/* "id": 1,
    "title": "Realistic Portrait AI",
    "imageUrl": "https://i.pinimg.com/1200x/04/6a/ef/046aef3824fc35cd1ad0bff0f253619a.jpg",
    "prompt": "Ultra realistic portrait of a young div></div>woman, soft light, 85mm lens, depth of field",
    "category": "Realistic",
    "model": "SDXL",
    "resolution": "768x1024",
    "likes": 210,
    "downloads": 54,
    "createdAt": "2026-04-22T09:00:00Z",
    "tags": ["portrait", "realistic", "photography", "ai"] */}

            </div>
            <div className="relative h-full aspect-square"> 
                <Image 
                src={photosData.imageUrl}
                alt={photosData.title}
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
               <Chip className="absolute top-2 right-2 bg-white/10 backdrop-blur-md border border-white/20 bg-linear-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent" color="accent">{photosData.category}</Chip>
                
            </div>
            <div>
                <h2 className="text-2xl">{photosData.title}</h2>
            </div>
            <div className="flex justify-between item">
                <div className="flex items-center gap-2">
                    <FaHeart />
                    <h3>{photosData?.likes}</h3>
                </div>
                <Separator orientation="vertical"/>
                <div className="flex items-center gap-2">
                    <FaDownload />
                    <h3>{photosData.downloads}</h3>
                </div>
            </div>
            <Link href="/all-data">
                <Button className="w-full py-4" variant="outline"> View</Button>    
            </Link>
        </Card>
      
    );
};

export default PhotoCard;