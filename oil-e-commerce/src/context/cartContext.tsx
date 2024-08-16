import { useState } from "react";


interface ICartContext {
    product: any | [];
    addToCart: (cart: any) => void;
}
export const CartContextProvider = ({children}) => {
    const [product, setProduct] = useState <any>([])
    const addToCart = (cart: any) => {
        setProduct((prevState: any) => [...prevState, cart])
    }
}