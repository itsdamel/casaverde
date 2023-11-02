//Styled components
import BaseParagraph from '../../../shared/Base/BaseParagraph';
import BaseCursive from '../../../shared/Base/BaseCursive';
import CardImg from '../../../shared/Card/CardImg';
import CardInformation from '../../../shared/Card/CardInformation';
import CardHeader from '../../../shared/Card/CardHeader';
import FlexDiv from '../../../shared/FlexDiv';
import BaseSection from '../../../shared/Base/BaseSection';

//dedicated styles
import { HowCard, FlexDivWrapper } from './style';

export default function HowTo(){
    return(
        <BaseSection>
            <HowCard id='HowTo'>
                <CardImg backgroundpath='assets/plantCard.png'>
                </CardImg>
                <CardInformation>
                    <CardHeader>
                        <BaseParagraph>Como conseguir</BaseParagraph>
                        <BaseCursive fontSize='42px'>minha planta</BaseCursive>
                    </CardHeader>
                    <FlexDivWrapper>
                        <FlexDiv><img src='assets/yellow-circle.svg' alt=''></img> <BaseParagraph  >Escolha suas plantas</BaseParagraph></FlexDiv>
                        <FlexDiv><img src='assets/yellow-circle.svg' alt=''></img> <BaseParagraph >Faça seu pedido</BaseParagraph></FlexDiv>
                        <FlexDiv><img src='assets/yellow-circle.svg' alt=''></img> <BaseParagraph >Aguarde na sua casa</BaseParagraph></FlexDiv>
                    </FlexDivWrapper>
                </CardInformation>
            </HowCard>
        </BaseSection>
        
    )
}