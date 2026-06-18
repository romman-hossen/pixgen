export const GetData = async () =>{
    try{
        const res = await fetch("https://pixgen-server-x95u.onrender.com/data");
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
    const res = await fetch("https://pixgen-server-x95u.onrender.com/data");
    const data = await res.json();
    return data;
}