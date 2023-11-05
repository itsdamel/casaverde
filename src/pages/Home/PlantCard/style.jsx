import styled from 'styled-components';
import Card from '../../../shared/Card/Card';
import CardInformation from '../../../shared/Card/CardInformation'
import CardImg from '../../../shared/Card/CardImg';
import BaseCursive from '../../../shared/Base/BaseCursive';
import BaseParagraph from '../../../shared/Base/BaseParagraph';

export const OfferCard = styled(Card)`
    width: 379px;
    height: 200px;
`
export const OfferImg = styled(CardImg)`
    width: 60%;
    height: 100%;
    background-position: left center; 

`
export const OfferInformation = styled(CardInformation)`
    width: 50%;
    align-items: flex-start;
    padding-left: 5px;
    
`
export const PlantName = styled(BaseCursive)`
    font-size: 32px;
    @media(max-width: 440px){
        font-size: 20px;
        break-word: break-all;
    }
`

export const PlantPrice = styled(BaseParagraph)`
    font-size: 16px;

`
export const BuyButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    width: fit-content;
    color: #FFCB47;
    font-weight: bold;

    img{
        width: 14px;
    }

`
