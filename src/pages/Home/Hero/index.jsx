//Styled components
import BaseParagraph from '../../../shared/Base/BaseParagraph.jsx'
import BaseCursive from '../../../shared/Base/BaseCursive.jsx'
import { HeroSection, BigPlant, ContentDiv, Oracle } from './style.jsx';
//Component
import NewsLetter from '../../../components/NewsLetter';

export default function Hero(){
    return(
        <HeroSection>
            
            <ContentDiv>
                <BaseParagraph> Sua casa com as</BaseParagraph>
                <BaseCursive >melhores plantas</BaseCursive>
                <BaseParagraph fontSize='16px'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</BaseParagraph>   
                <NewsLetter />    
            </ContentDiv>
            <BigPlant src='assets/hero-img.png'></BigPlant>
            <Oracle src='assets/yellow-oracle.svg'></Oracle>
        </HeroSection>
    )
}