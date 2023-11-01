import NewsLetter from '../../../components/NewsLetter'
import { HeroSection, BigPlant, ContentDiv, Oracle } from './style.jsx';
import { Paragraph } from '../../../shared/paragraph.jsx'
import { Cursive } from '../../../shared/cursive.jsx'
import { ToastContainer } from "react-toastify";
export default function Hero(){
    return(
        <HeroSection>
            
            <ContentDiv>
                <Paragraph> Sua casa com as</Paragraph>
                <Cursive >melhores plantas</Cursive>
                <Paragraph fontSize='16px'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Paragraph>   
                <NewsLetter />    
            </ContentDiv>
            <BigPlant src='assets/hero-img.png'></BigPlant>
            <Oracle src='assets/yellow-oracle.svg'></Oracle>
        </HeroSection>
    )
}