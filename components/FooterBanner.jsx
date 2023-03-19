import Link from 'next/link';
import React from 'react'; 
import { urlFor } from '@/lib/client'; 

const FooterBanner = ({footerBanner : {discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc}}) => {
    let style1 = {
        textAlign : 'left'
    }
    let style2 = {
        marginLeft : '.7cm'
    }

    return (
        <>
            <div className="footer-banner-container">
                <div className="banner-desc">
                    <div className="left" style={style1}>
                        <p style={style2}>{discount}</p>
                        <h3>{largeText1}</h3>
                        <h3>{largeText2}</h3>
                        <p style={style2}>{saleTime}</p>
                    </div>
                    <div className="right" style={style1}>
                        <p>{smallText}</p>
                        <h3>{midText}</h3>
                        <p>{desc}</p>
                        <Link href={`/product/${product}`}>
                            <button type='button'>{buttonText}</button>
                        </Link>
                    </div>
                    <img src={urlFor(image)}
                        className="footer-banner-image"
                    />
                </div>
            </div>
        </>
    )
}

export default FooterBanner; 