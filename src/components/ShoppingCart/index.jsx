import { CartDiv, CartHeader, CloseButton, CartContent } from "./style"
import { CartCard } from "../CartCard";

export default function ShoppingCart({cartItems, closeCart, removeFromCart}){
   
    let toRender = cartItems.map((item) =><CartCard removeFromCart={removeFromCart} key={item.id} product={item}/>)
    return(
        <CartDiv>
           <CartHeader>
               <h1>Carrinho de Compras</h1>
               <CloseButton onClick={closeCart} src='assets/close-button.png'></CloseButton>
           </CartHeader>
           <CartContent>
                {cartItems? <p>Your shopping cart is empty</p>:toRender}
           </CartContent>
           
        </CartDiv>
    )
} 

