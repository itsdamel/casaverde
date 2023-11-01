import styled from "styled-components";
import { Card, CardInformation } from '../../../shared/card.jsx'
import { CardImg } from '../../../shared/card.jsx';
import { Cursive } from "../../../shared/cursive.jsx";
import { Paragraph } from "../../../shared/paragraph.jsx";

const OfferCard = styled(Card)`
    width: 379px;
    height: 200px;
   
`
const OfferImg = styled(CardImg)`
    width: 60%;
    height: 100%;
    background-position: left center; 

`
const OfferInformation = styled(CardInformation)`
    width: 50%;
    align-items: left;
    padding-left: 5px;
    
`
const PlantName = styled(Cursive)`
    font-size: 32px;
    @media(max-width: 440px){
        font-size: 20px;
        break-word: break-all;
    }
`

const PlantPrice = styled(Paragraph)`
    font-size: 16px;

`
const BuyButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    width: fit-content;
    display: flex;
    gap: 10px;
    align-items: center;
    color: #FFCB47;
    font-weight: bold;

    img{
        width: 14px;
    }

`
export{OfferCard, OfferImg, OfferInformation, BuyButton, PlantName, PlantPrice}