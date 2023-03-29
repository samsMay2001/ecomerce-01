import product from '@/ecomerce01/schemas/product';
import React, {createContext, useContext, useState, useEffect } from 'react'

import {toast} from 'react-hot-toast' // pop notification

const context = createContext(); 

export const StateContext = ({children}) => {
    let [showCart, setShowCart] = useState(false); 
    let [cartItems, setCartItems] = useState([]); 
    let [totalPrice, setTotalPrice] = useState(0); 
    let [totalQuantities, setTotalQuantities] = useState(0); 
    let [qty, setQty] = useState(1);
    
    let foundProduct; 
    let index; 
    const incQty = () => {
        setQty((prevQty) => prevQty+1)
    }
    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1; 
            return prevQty - 1;
        })
    }
    const toggleCartItemQuantity = (id, value)=> {
        foundProduct = cartItems.find((items)=> items._id === id)
        index = cartItems.findIndex((product)=> product._id === id)
        const newCartItems = cartItems.filter((item)=> item._id !== id)

        if (value === 'inc'){
            setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1}])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuantity => prevTotalQuantity + 1) 
        }else if (value === 'dec'){
            if (foundProduct.quantity > 1){     
                setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity - 1}])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(prevTotalQuantity => prevTotalQuantity - 1) 
            }
        }

    }
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item)=> item._id === product._id)
        setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantity)=> prevTotalQuantity + quantity)
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct)=> {
                if (cartProduct._id === product._id) return {
                    ...cartProduct, 
                    quantity: cartProduct.quantity + quantity
                }
            })
            
            setCartItems(updatedCartItems)
        }
        else {
            product.quantity = quantity; 
            setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart`)
    }
    const onRemove = (product) => {
        foundProduct = cartItems.find((item)=> item._id === product._id); 
        const newCartItems = cartItems.filter((item)=> item._id !== product._id)
        setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price * foundProduct.quantity); 
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)
    }
    return (
        <context.Provider 
        value={{
            showCart,
            cartItems, 
            totalPrice,
            totalQuantities,
            qty,
            incQty, 
            decQty,
            onAdd,
            showCart,
            setShowCart,
            toggleCartItemQuantity, 
            onRemove
        }
    }
    >
            {children}
        </context.Provider>
    )
    
}

export const useStateContext = () => useContext(context)