export const GetData = async () =>{
    try{
        const res = await fetch("https://pixgen-beta.vercel.app/data.json");
    if(res.ok){
        const data = await res.json();
            return data;

    }
    else{
    throw new Error(`HTTP Error: ${res.status}`);

    }

    }
    
    
    catch(error){
        console.error("Fetch Error:", error);

    }
}
export const GetCategory = async () => {
    const res = await fetch("https://pixgen-beta.vercel.app/category.json");
    const data = await res.json();
    return data;
}