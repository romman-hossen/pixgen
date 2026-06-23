import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import { GetData } from "@/lib/data";


const AllDataPage =async ({searchParams}) => {
     const data = await GetData();
      const {category} = await searchParams;
    //  console.log(category,"params") 
        // const filteredCategory = data.filter(fData => fData.Category == category);
        // console.log(filteredCategory,"filterd data")
        const findData = category ? data.filter(fData => fData.category.toLowerCase() === category) : data;
      
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className='text-3xl font-bold my-10'>All Photos</h2>
            <Category />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    findData.map (photos => <PhotoCard key={photos.id} photosData={photos}></PhotoCard>)
                }
         </div> 
        </div>
    );
};
export default AllDataPage;