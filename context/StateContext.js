import React, {createContext, useContext, useState, useEffect } from 'react'

import {toast} from 'react-hot-toast' // pop notification

const context = createContext(); 

export const StateContext = ({children}) => {
    let [showCart, setShowCart] = useState(false); 
    let [cartItems, setCartItems] = useState(); 
    let [totalPrice, setTotalPrice] = useState(); 
    let [totalQuantites, setTotalQuantities] = useState(); 
    let [qty, setQty] = useState(1);
    
    const incQty = () => {
        setQty((prevQty) => prevQty+1)
    }
    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1; 
            return prevQty - 1;
        })
    }

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item)=> {
            item._id === product._id
        })
        if (checkProductInCart) {
            setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price * quantity)
            setTotalQuantities((prevTotalQuantity)=> prevTotalQuantity + quantity)
            
            
            const updatedCartItems = cartItems.map((cartProduct)=> {
                if (cartProduct._id === product._id) return {
                    ...cartProduct, 
                    quantity: cartProduct.quantity + quantity
                }
            })
            
            setCartItems(updatedCartItems)
            toast.success(`${qty} ${product.name} added to the cart`)
            
        }
        else {
            product.quantity = quantity; 
            setCartItems([...cartItems, {...product}])
            
        }
    }
    
    return (
        <context.Provider 
        value={{
            showCart,
            cartItems, 
            totalPrice,
            totalQuantites,
            qty,
            incQty, 
            decQty,
            onAdd
        }
    }
    >
            {children}
        </context.Provider>
    )
    
}

export const useStateContext = () => useContext(context)