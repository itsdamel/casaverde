import NewsLetter from "../NewsLetter";
import styled from "styled-components"

const HeroSec = styled.section`
    align-items: center;
    position: relative;
    height: 100vh;
    display: flex;
    padding-left: 100px;
`
const ContentDiv= styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
    max-width: 480px;
`;

const Paragraph = styled.p`
    line-height: 26px;
    font-size: 22px;
    opacity: 0.5;
`;

const SmallerP = styled(Paragraph)`
    font-size: 16px;
`;
    
const Cursive = styled.p`
    font-family: 'Elsie Swash Caps', serif;
    font-size: 82px;
    font-weight: 900;
`
const BigPlant = styled.img`
    z-index: 1;
    position: absolute;
    max-width: 40%;
    max-height: 130%;
    top: 8%;
    right: 10%;
`
const Oracle = styled.img`
    position: absolute;
    top: -250px;
    right: -300px;
    transform: rotate(20.536deg);
`;
export default function Hero(){
    return(
        <HeroSec>
            <ContentDiv>
                <Paragraph>Sua casa com as</Paragraph>
                <Cursive>melhores plantas</Cursive>
                <SmallerP>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</SmallerP>   
                <NewsLetter />    
            </ContentDiv>
            <BigPlant src='assets/hero-img.png'></BigPlant>
            <Oracle src='assets/yellow-oracle.svg'></Oracle>
        </HeroSec>
    )
}