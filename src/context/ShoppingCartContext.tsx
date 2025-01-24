"use client"
import { createContext, useState } from "react";

type ShoppingCartContextProviderProps = {
    children: React.ReactNode;
}

type CartItems = {
    id: number,
    qty: number,
}

const ShoppingCartContext = createContext({})

export function ShoppingCartContextProvider({children}: ShoppingCartContextProviderProps) {

    const [cartItems, setCartItems] = useState<CartItems[]>([]);
    return(
        <ShoppingCartContext.Provider value={{cartItems}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}