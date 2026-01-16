'use client'

import { ReactNode, createContext, useContext, useState } from "react";
import { CartContextType } from "../models/cart-context.model";
import { CartItem } from "../models/cart-item.model";
import { Product } from "../models/product.model";


const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
    const context = useContext(CartContext)

    if(!context) {
        throw new Error("Оберните в CartProvider")
    }

    return context
}

export default function CartProvider({children}: {children: ReactNode}) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

 const addToCart = (product: Product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, count: 1 }];
            }
        });
    };

    return(
        <CartContext.Provider value={{isOpen, cartItems, setIsOpen, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}
