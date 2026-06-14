import { GetData } from "@/lib/data";

const PhotosDataDetails = async({params}) => {
    const {id} = await params;
    const data = await GetData();

    const findData = data.find(d=> d.id === Number(id));
    // console.log(findData)
    
    // console.log(typeof id)
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h2 className="text-3xl font-bold">This is Details Section</h2>
            <h3>{findData.prompt}</h3>
            
            
        </div>
    );
};

export default PhotosDataDetails;