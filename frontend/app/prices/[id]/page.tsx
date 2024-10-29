import LoadingSpinner from '@/components/LoadingSpinner';
import ProductPage from '@/components/ProductPage';
import { Suspense } from 'react';


interface Params {
    id: number;
}

export default async function SlugPage({ params }: { params: Params }) {



    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <ProductPage id={{ id : params.id}} />
            </Suspense>

        </>
    )

}