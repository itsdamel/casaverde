import { useContext } from 'react';
import { Header, Logo, Nav } from './style.jsx';
import CartContext from '../../context/cartContext.jsx';

export default function Menu(){
    const {displayCart} = useContext(CartContext)
    return(
        <Header>
            <Logo>
                <img src='assets/logo.svg'></img>
                
            </Logo>
            <Nav>
                <a href='#HowTo'>Como fazer</a> 
                <span> / </span>
                <a href='#Offers'>Ofertas</a> 
                <span> / </span>
                <a href='#' onClick={displayCart}>Meu carrinho</a> 
            </Nav>
            
        </Header>
    )
}