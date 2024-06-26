import { useStateContext } from '@/context/StateContext';
import { urlFor } from '@/lib/client';
import Link from 'next/link';
import React, { useRef } from 'react'
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti'
const Cart = () => {
    const cartRef = useRef() // read more on this hook
    let { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()
    
    return (
        <>
            <div className="cart-wrapper"  ref={cartRef}>
                <div className="cart-container">
                <button
                    type='button'
                    className='cart-heading'
                    onClick={()=> setShowCart(false)}
                >
                    <AiOutlineLeft/>
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">({totalQuantities} items)</span>
                </button>
                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150}/>
                        <h3>Your shopping bag is empty</h3>
                    <Link href={'/'}>
                        <button
                            type='button'
                            onClick={()=> {setShowCart(false)}}  
                            className = "btn"
                        >Continue Shopping</button>
                    </Link>
                    </div>
                )}

                <div className="product-container">
                    {cartItems.length >= 1 && cartItems.map((item)=> (
                        <div className="product" key={item._id}>
                            <img src={urlFor(item?.image[0])} className="cart-product-image" alt="" />
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>
                                        {item.name}
                                    </h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="flex bottom">
                                    <div>
                                        <p className='quantity-desc'>
                                            <span className='minus' onClick={()=> toggleCartItemQuantity(item._id, 'dec')}>
                                                <AiOutlineMinus />
                                            </span>
                                            <span className='num'>
                                                {item.quantity}
                                            </span>
                                            <span className='plus' onClick={()=> toggleCartItemQuantity(item._id, 'inc')}>
                                                <AiOutlinePlus/>
                                            </span>
                                        </p>
                                    </div>
                                    <button type='button' className="remove-item" onClick={()=>onRemove(item)}>
                                        <TiDeleteOutline/>
                                    </button>
                                </div>
                                {cartItems.length >= 1 && (
                                    <div className="cart-bottom">
                                        <div className="total">
                                            <h3>Subtotal:</h3>
                                            <h3>${totalPrice}</h3>
                                        </div>
                                        <div className="btn-container">
                                            <button className="btn" type='button'>
                                                Pay with Stripe
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default Cart; 