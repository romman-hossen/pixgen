import { GetData } from "@/lib/data";

const PhotosDataDetails = async({params}) => {
    const {id} = await params;
    const data = await GetData();

    const findData = data.find(d=> d.id === Number(id));
    // console.log(findData)
    
    // console.log(typeof id)
    return (
        <div>
            <h2>This is Details Section</h2>
            
            
        </div>
    );
};

export default PhotosDataDetails;