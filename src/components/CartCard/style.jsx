import styled from 'styled-components';
import { OfferCard, PlantName, PlantPrice, OfferImg, OfferInformation } from '../../pages/Home/PlantCard/style'
import  CardHeader from '../../shared/Card/CardHeader';
import { CloseButton } from '../ShoppingCart/style';
import BaseFlexDiv from '../../shared/Base/BaseFlexDiv';

export const CartCardDiv = styled(OfferCard)`
    width: 100%;
    box-shadow: none;
    min-height: 25%;
    justify-content: space-between;
    border-bottom: 1px dashed gray;
    align-items: flex-start;
    ${OfferInformation}{
        width: 50%;
    }

`
export const RemoveButton =styled(CloseButton)`
    width: fit-content;
   
`
export const CartCardHeader = styled(CardHeader)`
    display: flex;
    height: 100%;
    width: fit-content;

    ${OfferImg}{
        width: 150px;
        height: 100%;

    }
   
`
export const Quantity = styled(BaseFlexDiv)`
    width: fit-content;
    border: 2px solid green;
    height: fit-content;
    gap: 10px;
    
    button{
        cursor: pointer;
        border: none;
        width: 35px;
        height: auto;
        padding: 5px 10px;
        background-color: #FFCB47;
    }

    button:hover{
        background-color: #b39500;
    }

  
`
export const SmallPlantName = styled(PlantName)`
    font-size: 18px;
`

export const SmallPlantPrice = styled(PlantPrice)`
    font-size: 14px;
`


