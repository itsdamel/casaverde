import { CartDiv, CartHeader, CloseButton, CartContent, CartFooter } from './style'
import { CartCard } from '../CartCard';
import { useContext } from 'react';
import useTotal from '../../hooks/useTotal';
import CartContext from '../../context/cartContext';

export default function ShoppingCart(){
    const { closeCart, cartItems, cleanShoppingCart } = useContext(CartContext)
    let total = useTotal();
    const handleTotal = () =>{
        setTotal(cartItems.reduce((counter, item) => counter += (item.price * item.quantityInCart), 0)
        )
    }
    let toRender = cartItems.map((item) => <CartCard handleTotal={handleTotal}  key={item.id} product={item}/>)
    return(
        <CartDiv>
           <CartHeader>
               <h1>Carrinho de Compras</h1>
               <CloseButton onClick={closeCart} src='assets/close-button.png'></CloseButton>
           </CartHeader>
           <CartContent>
                {cartItems.length == 0? <p>Seu carrinho está vazio.</p> : toRender}
           </CartContent>
           <CartFooter>
                <div className='totalDiv'>
                    <h3>Total:</h3>
                    <p>R${total},00</p>
                </div>
                <div className='buttonsDiv'>
                    <button onClick={cleanShoppingCart}>Esvaziar carrinho</button>
                    <button>Comprar</button>
                </div>
           </CartFooter>
        </CartDiv>
    )
} 

