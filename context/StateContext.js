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

    
    
    return (
        <context.Provider 
            value={{
                showCart,
                cartItems, 
                totalPrice,
                totalQuantites,
                qty,
                incQty, 
                decQty 
            }
            }
        >
            {children}
        </context.Provider>
    )
    
}

export const useStateContext = () => useContext(context)