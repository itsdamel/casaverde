import { Header, Logo, Nav } from './style.jsx';

export default function Menu(){
    return(
        <Header>
            <Logo>
                <img src='assets/logo.svg'></img>
                
            </Logo>
            <Nav>
                <a href='#'>Como fazer</a> 
                <span> / </span>
                <a href='#'>Ofertas</a> 
                <span> / </span>
                <a href='#'>Meu carrinho</a> 
            </Nav>
        </Header>
    )
}