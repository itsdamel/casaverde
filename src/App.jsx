import Menu from './components/Menu';
import Hero from './components/Hero';
import HowTo from './components/HowTo';
import Offers from './components/Offers';
import ShoppingCart from './components/ShoppingCart';
import { HomePage } from './HomePage.style';
import './App.css'
import {useState} from 'react';
//Toastify lib 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [cartVisibility, setCartVisibility]= useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) =>{
      
    if (!item.inShoppingCart){
      toast.info(`${item.name} foi adicionada ao carrinho!`,{containerId: 'addToCart'})
      item.inShoppingCart = true;
      let newCart = [...cartItems, item]
      setCartItems(newCart)
    }
  }

  const removeFromCart = (product) =>{
    product.inShoppingCart = false;
    let newCart = cartItems.filter((item) => item.id != product.id)
    setCartItems(newCart)
    console.log(cartItems)
    
  }

  const cleanShoppingCart = () =>{
    cartItems.forEach((item) => item.inShoppingCart = false)
    setCartItems([])
  }
  const closeCart =() =>{
    setCartVisibility(false)
  }

  const displayCart = () =>{
    setCartVisibility(true)
  }

  return (
    <>
      {cartVisibility&&<ShoppingCart clean={cleanShoppingCart} remove={removeFromCart} close={closeCart} cartItems={cartItems}/>}
      <HomePage cartVisibility={cartVisibility}>
        <Menu displayCart={displayCart}/>
    
        <Hero />
        <HowTo />
        <Offers displayCart={displayCart} addToCart={addToCart}/>
  
      </HomePage>
    </>

  )
}



