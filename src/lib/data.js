export const GetData = async () =>{
    try{
        const res = await fetch("https://pixgen-beta.vercel.app/data.json", {
    signal: AbortSignal.timeout(30000),
  });
    if(!res.ok){
        throw new Error(`HTTP Error: ${res.status}`);

    }
   return await res.json();

    }
    
    
    catch(error){
        console.error("Fetch Error:", error);
        throw error;
    }
}
export const GetCategory = async () => {
    const res = await fetch("https://pixgen-beta.vercel.app/category.json");
    const data = await res.json();
    return data;
}