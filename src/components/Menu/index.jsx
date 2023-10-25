import { Header, Logo, Nav } from './style.jsx';

export default function Menu(){
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
                <a href='#'>Meu carrinho</a> 
            </Nav>
        </Header>
    )
}