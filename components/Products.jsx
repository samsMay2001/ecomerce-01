import { urlFor } from '@/lib/client';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Product = ({ product: { image, name, slug, price } }) => {
  const router = useRouter();

  let productStyle = {
      textAlign: 'left',
      fontWeight: '700'
    };
    let productStyle1 = {
    marginTop: '.5cm',
    fontWeight: '400',
    textAlign: 'left',
  };

  const handleClick = () => {
    router.push(`/product/${slug.current}`);
  };

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
      </Link>
      <div className="product-card" onClick={handleClick}>
        <img className="product-image" src={urlFor(image && image[0])} width={250} alt="" />
        <p className='product-name' style={productStyle1}>{name}</p>
        <p className='product-price' style={productStyle}>${price}</p>
      </div>
    </div>
  );
};

export default Product;