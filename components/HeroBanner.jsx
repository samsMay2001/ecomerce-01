import { urlFor } from '@/lib/client';
import Link from 'next/link';
import React from 'react'

const HeroBanner = ({heroBanner}) => {
    return (
        <>
            <div className="hero-banner-container">
                <div>
                    <p className="beats-solo">{heroBanner.smallText}</p>
                    <h3>{heroBanner.midText}</h3>
                    <h1>{heroBanner.largeText1}</h1>
                    <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image ' />
                </div>
                <div>
                    <Link href={`/product/${heroBanner.product}`}>
                        <button type='button'>{heroBanner.buttonText}</button>
                    </Link>
                    <div className="desc">
                        <h5>{heroBanner.saleTime}</h5>
                        <p>{heroBanner.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner; 