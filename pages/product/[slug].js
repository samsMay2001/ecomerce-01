import { useStateContext } from '@/context/StateContext';
import { urlFor, client } from '@/lib/client';
import React, {useState} from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import Products from '../../components/Products'
const ProductDetails = ({products, product}) => {
    // read on how routing is done, especially file based routing in nextjs the answer this: 
    // why do you name this file like this []
    const {decQty, incQty, qty, onAdd} = useStateContext()
    const {image, name, details, price} = product; 
    let style1 = {
        // border: '1px dashed grey'
    }
    let style2 = {
        // border: '1px dashed grey', 
        position : 'absolute',
        top: '0', 
        right: '0',
        width : '10cm'
    }
    let style3 = {
        // border : '1px dashed grey',
        position : 'relative'
    }
    let [index, setIndex] = useState(0)
    return (
        <div>
            <div className='product-detail-container' style={style3}>
                <div style={style1}>
                    <div className='image-container'>
                        <img src={urlFor(image && image[index])} className="product-detail-image" />
                    </div>
                    <div className='small-images-container'>
                        {image?.map((item, i)=> (
                            <img
                                src={urlFor(item)}
                                className = {
                                    i === index ? 
                                    'small-image selected-image' : 
                                    'small-image'
                                }
                                onMouseEnter = {()=> {setIndex(i)}}
                             />
                        ))}
                    </div>
                    <div className='product-detail-desc' style={style2}>
                        <h1>{name}</h1>
                        <div className='reviews'>
                            <div>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiOutlineStar/>
                            </div>
                            <p>(20)</p>
                        </div>
                        <h4>Details: </h4>
                        <p>{details} </p>
                        <p className='price'>${price} </p>
                        <div className='Quantity'>
                            <h3>Quantity:</h3>
                            <p className='quantity-desc'>
                                <span className='minus' onClick={decQty}>
                                    <AiOutlineMinus />
                                </span>
                                <span className='num'>
                                    {qty}
                                </span>
                                <span className='plus' onClick={incQty}>
                                    <AiOutlinePlus/>
                                </span>
                            </p>
                        </div>
                        <div className='buttons'>
                            <button className='add-to-cart' onClick={()=>{
                                onAdd(product, qty)
                            }} type='button'>
                                Add To Cart
                            </button>
                            <button className='buy-now' onClick='' type='button'>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='maylike-products-wrapper'>
                <h2>
                    You may also like
                </h2>
                <div className='marquee'>
                    <div className='maylike-products-container'>
                        {products.map((item) => (
                            <Products key={item._id} product={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// isn't this the code that runs on the web? why would you want sanity querries here? aren't they vulnerable?
export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
        slug {
            current
        }
    }`

    const products = await client.fetch(query); 

    const paths = products.map((product)=> ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths, 
        fallback:'blocking'
    }
}

//gets product details from the product page 
export const getStaticProps = async ({params : {slug}} ) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0] `; // this is sanity querries, like sql querries
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    
    return {
      props: {products, product}
    }
  }

export default ProductDetails; 