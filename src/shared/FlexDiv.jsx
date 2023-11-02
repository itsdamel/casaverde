import styled from "styled-components"
import BaseFlexDiv from "./Base/BaseFlexDiv";
import Paragraph  from "./Base/BaseParagraph"

const FlexDiv = styled(BaseFlexDiv)`
    gap: 10px;

    img{
        width: 12%;
        height: auto;
    }
    @media screen and(max-width: 650px){
        ${Paragraph}{font-size: '16px'}
    }   

`

export default FlexDiv;