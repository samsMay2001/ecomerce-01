import React from 'react'
import "jquery";
import "popper.js/dist/umd/popper" 
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css"; 

const Home = () => {
  let overideClass = {
    backgroundColor: "white", 
    color: 'black',
    height: '100%',
    width: '100%',
    position: 'absolute'
  }
  return (
    <div style={overideClass}>
      <div className='products-heading'>
      HeroBanner
      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>
        {['Product 1', 'Product 2'].map((product)=> product)}
      </div>
      Footer
      </div>
    </div>
  )
}

export default Home;
