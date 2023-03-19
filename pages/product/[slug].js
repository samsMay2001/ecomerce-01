import { urlFor, client } from '@/lib/client';
import React from 'react'

const ProductDetails = ({products, product}) => {
    // read on how routing is done, especially file based routing in nextjs the answer this: 
    // why do you name this file like this []
    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductDetails; 