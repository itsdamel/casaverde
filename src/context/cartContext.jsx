import { createContext } from "react";

const CartContext = createContext({
    cartItems: [],
    addToCart: () =>{},
    removeFromCart: () =>{},
    cleanShoppingCart: () => {},
    closeCart: () => {},
    displayCart: () =>{}
});

export default CartContext;