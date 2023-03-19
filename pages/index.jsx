import React from 'react'
import "jquery";
import "popper.js/dist/umd/popper" 
// import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css"; 
import { client } from '@/lib/client';
import {Product, FooterBanner, HeroBanner} from '../components'


const Home = ({products, bannerData}) => {
  let overideClass = {
    backgroundColor: "white", 
    color: 'black',
    height: '100%',
    width: '100%',
  }
  return (
    <div style={overideClass}>
      <div className='products-heading'>
        {/* data is requested in the home component then passed through the (heroBanner) prop to (HeroBanner) component */}
        <HeroBanner heroBanner={ bannerData.length && bannerData [0]}>
        </HeroBanner>
        <div>
          <h2>Best Selling Products</h2>
          <p>Speakers of many variations</p>
        </div>
        <div className='products-container'>
          {products?.map((product)=> <Product key={product._id} product={product} />)}
        </div>
        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </div>
    </div>
  )
}
// read more on how http requests are done in both react and nextjs
export const getServerSideProps = async ( ) => {
  const query = '*[_type == "product"]'; 
  const products = await client.fetch(query); 
  const bannerQuery = '*[_type == "banner"]'; 
  const bannerData = await client.fetch(bannerQuery); 
  
  return {
    props: {products, bannerData}
  }
}

export default Home;
