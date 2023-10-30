import Menu from './components/Menu'
import Hero from './components/Hero'
import HowTo from './components/HowTo'
import Offers from './components/Offers'
import ShoppingCart from './components/ShoppingCart'
import { HomePage } from './HomePage.style'
import './App.css'
import {useState} from 'react';


function App() {
  const [cartVisibility, setCartVisibility]= useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) =>{
      if (!item.inShoppingCart){
        item.inShoppingCart = true;
        let newCart = [...cartItems, item]
        setCartItems(newCart)
      }
      

      
  }

  const removeFromCart = (product) =>{
    product.inShoppingCart = false;
    let newCart = cartItems.filter((item) => item.id != product.id)
    setCartItems(newCart)
   
    
  }
  const closeCart =() =>{
    setCartVisibility(false)
  }

  const displayCart = () =>{
    setCartVisibility(true)
  }

  return (
    <>
      {cartVisibility&&<ShoppingCart removeFromCart={removeFromCart} closeCart={closeCart} cartItems={cartItems}/>}
      <HomePage cartVisibility={cartVisibility}>
        <Menu displayCart={displayCart}/>
    
        <Hero />
        <HowTo />
        <Offers displayCart={displayCart} addToCart={addToCart}/>
      </HomePage>
    </>

  )
}

export default App
