  

interface price{
    id : number ; 
    shop_name : string ;
    date : Date ;
    time :  string ;
    fname : string ;
    description : string ;
    price : number ;
    place : string
}

export const get_price_details = async () : Promise<price[]> => {

    const result = await fetch( "http://127.0.0.1:8000/get/price/" ,
        {
            method : "GET" ,
            headers : {
                "Content-Type" : "application/json"
            }
        }
    )

    if(!result.ok){
        console.log(`Failed to load the data from API ${result.status}`)
        return []
    }

    const data : price[] = await result.json()

    return data
}