import { detailsById } from '@/apilib/Apilib';
import ProductPage from '@/components/ProductPage';
import { PriceDetail } from '@/interfaces/interfaces';


interface Params {
    id: number;
}

export default async function SlugPage({ params }: { params: Params }) {

    const response : PriceDetail =await detailsById(params.id)

    return (
        <>
        
        <ProductPage  id = { response.id } shop_name = { response.shop_name } date = 
        { response.date } time = { response.time } fname = { response.fname } 
        description = { response.description } price = { response.price } place = 
        { response.place }/>

        </>
    )

}