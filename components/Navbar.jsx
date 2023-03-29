import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import { useStateContext } from '@/context/StateContext';
import Cart from './Cart';

const Navbar = () => {
    let {showCart, setShowCart, totalQuantities} = useStateContext()
    const router = useRouter();
    const handleClick = () => {
        router.push(`/`)
    }
    let style1 = {
        border: '1px dashed grey',
        fontSize : '15px'
    }
    const addToCart = () => {
        setShowCart(!showCart); // this is a bad build because setShowCart is called directly in this component
    }
    return (
        <>
            <div className="navbar-container" style={style1}>
                <p className='logo' onClick={handleClick}>
                    JSM Headphones
                </p>
                <button className="cart-icon" onClick={addToCart}>
                    <AiOutlineShopping />
                    <span className="cart-item-qty">{totalQuantities}</span>
                </button>
                {showCart && <Cart/>}
            </div>
        </>
    )
}

export default Navbar; 