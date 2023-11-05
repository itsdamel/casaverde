import styled from 'styled-components';
import BaseFlexDiv from '../../shared/Base/BaseFlexDiv';

const Header = styled.header`
    display: flex;
    position: relative;
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

const Logo = styled(BaseFlexDiv)`

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

    @media(max-width:350px){
        font-size: 12px;
    }

`;

export { Header, Logo, Nav };