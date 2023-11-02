import { useState, useEffect, useContext } from 'react';
import CartContext from '../context/cartContext';

export default function useTotal(){
    const {cartItems} = useContext(CartContext);
    const [total, setTotal] = useState(0); 

   useEffect(()=>{
        setTotal(cartItems.reduce((counter, item) => counter += (item.price * item.quantityInCart), 0)
        );
    }, [cartItems]);

    return [total, setTotal];
}
