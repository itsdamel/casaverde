import styled from "styled-components"

import { Paragraph } from "./paragraph"

export const Card = styled.div`
    display: flex;
    align-items:center;
    width: 60vw;
    height: 50vh;
    justify-content: center;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    z-index: 1;

`
export const CardImg = styled.div`
    background: url(${props => props.backgroundpath}) no-repeat center bottom;
    background-size: cover;
    width: 50%;
    height: 100%;

    @media screen and (max-width: 650px){
        width: 100%;
        height: 50%;
    }

`
export const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px 0px 0px 20px;
    background-color: #FFFF;
    height: 100%;
    width: 50%;

`
export const CardHeader = styled.div`
     @media screen and(max-width: 650px){
        ${Paragraph}{
            font-size: 12px;
        }
     }
`
export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img{
        width: 12%;
        height: auto;
    }
    @media screen and(max-width: 650px){
        ${Paragraph}{font-size: '16px'}
    }   

`