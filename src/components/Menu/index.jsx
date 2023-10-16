import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    position: relative;
    z-index: 2;
    justify-content: space-between;
    width: 80vw;
    padding-top: 10px;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 2px
    border: 2px solid black;
`;

const Nav = styled.nav`
    text-decoration: none;
    display: flex;
    gap: 10px;
   
    a{
        text-decoration: none;
        font-weight: 500;
    }

`;
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
                <a href='#'>Depoimentos</a> 
                <span> / </span>
                <a href='#'>Videos</a>
                <span> / </span>
                <a href='#'>Meu carrinho</a> 
            </Nav>
        </Header>
    )
}