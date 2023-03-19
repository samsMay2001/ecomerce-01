import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai'

const Navbar = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/`)
    }
    let style1 = {
        border: '1px dashed grey',
        fontSize : '15px'
    }
    const addToCart = () => {}
    return (
        <>
            <div className="navbar-container" style={style1}>
                <p className='logo' onClick={handleClick}>
                    JSM Headphones
                </p>
                <button className="cart-icon" onClick={addToCart}>
                    <AiOutlineShopping />
                    <span className="cart-item-qty">1</span>
                </button>
            </div>
        </>
    )
}

export default Navbar; 