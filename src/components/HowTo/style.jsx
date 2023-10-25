import styled from "styled-components";
import { Card } from "../../shared/card";
import { Cursive } from "../../shared/cursive";
import { CardInformation } from "../../shared/card";


export const FlexDivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 650px){
        gap: 10px;
    }
`

export const HowCard = styled(Card)`
    ${Cursive}{
        font-size: 42px;
    }
    ${CardInformation}{
        @media screen and (max-width: 650px){
        width: 100%;
        align-items: center;
        justify-content: space-around;
        height: 60%;
        
    }
    }
    @media screen and (max-width: 900px){
        width: 80vw;
    }

    @media screen and (max-width: 650px){
        flex-direction: column;
        ${Cursive}{
            font-size: 30px;
        }
    }
`