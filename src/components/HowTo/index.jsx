import { Paragraph } from "../../shared/paragraph";
import { Cursive } from "../../shared/cursive";
import { CardImg, CardInformation, FlexDiv, CardHeader } from "../../shared/card";
import { BaseSection } from "../../shared/BaseSection";
import { HowCard, FlexDivWrapper } from "./style";

export default function HowTo(){
    return(
        <BaseSection>
            <HowCard id="HowTo">
                <CardImg backgroundpath='assets/plantCard.png'>
                </CardImg>
                <CardInformation>
                    <CardHeader>
                        <Paragraph>Como conseguir</Paragraph>
                        <Cursive fontSize='42px'>minha planta</Cursive>
                    </CardHeader>
                    <FlexDivWrapper>
                        <FlexDiv><img src="assets/yellow-circle.svg" alt=''></img> <Paragraph  >Escolha suas plantas</Paragraph></FlexDiv>
                        <FlexDiv><img src="assets/yellow-circle.svg" alt=''></img> <Paragraph >Faça seu pedido</Paragraph></FlexDiv>
                        <FlexDiv><img src="assets/yellow-circle.svg" alt=''></img> <Paragraph >Aguarde na sua casa</Paragraph></FlexDiv>
                    </FlexDivWrapper>
                </CardInformation>
            </HowCard>
        </BaseSection>
        
    )
}