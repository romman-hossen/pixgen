import PhotoCard from "@/components/PhotoCard";
import { GetData } from "@/lib/data";


const AllDataPage =async () => {
     const data = await GetData();
    
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className='text-3xl font-bold my-10'>All Data is here</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    data.map (photos => <PhotoCard key={photos.id} photosData={photos}></PhotoCard>)
                }

         </div> 
        </div>
    );
};

export default AllDataPage;