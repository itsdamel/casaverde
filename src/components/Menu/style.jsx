import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    position: static;
    z-index: 2;
    margin-bottom: 20px;
    justify-content: space-between;
    width: 80vw;
    height: fit-content;
    align-items: center;

    @media screen and (max-width:640px){
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 5px;   
    }

   
`;

const Logo = styled.div`
    display: flex;

    gap: 2px;

    img{
        height: 35px;
    }
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

export { Header, Logo, Nav };