import Menu from '../../components/Menu';
import Hero from './Hero/index.jsx';
import HowTo from './HowTo/index.jsx';
import Offers from './Offers/index.jsx';
import { HomePage, Main } from './style';
import ShoppingCart from '../../components/ShoppingCart/index.jsx'
//external libraries
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';

export default function Home(){

    const [cartVisibility, setCartVisibility]= useState(false)
    const [cartItems, setCartItems] = useState([])
  
    const addToCart = (item) =>{
        if (!item.inShoppingCart){
            item.inShoppingCart = true;
            let newCart = [...cartItems, item]
            setCartItems(newCart)
        }
        item.quantityInCart += 1;
        toast.info(`${item.name} foi adicionada ao carrinho!`,{containerId: 'addToCart'})
        
        setCartVisibility(true)
      }
    
      const removeFromCart = (product) =>{
        product.inShoppingCart = false;
        product.quantityInCart = 0;
        let newCart = cartItems.filter((item) => item.id != product.id)
        setCartItems(newCart)
      }
    
      const cleanShoppingCart = () =>{
        cartItems.forEach((item) => {
          item.inShoppingCart = false
          item.quantityInCart = 0;
        })
        setCartItems([])
      }
      const closeCart =() =>{
        setCartVisibility(false)
      }
    
      const displayCart = () =>{
        setCartVisibility(true)
      }
    
    return(
        <HomePage >
            {cartVisibility&&<ShoppingCart clean={cleanShoppingCart} remove={removeFromCart} close={closeCart} cartItems={cartItems}/>}
            <Main cartVisibility={cartVisibility}>
              <Menu displayCart={displayCart}/>
              <Hero />
              <HowTo />
              <Offers displayCart={displayCart} addToCart={addToCart}/>
            </Main>
        </HomePage>
    )
   
  
}