import styled from 'styled-components';
import { OfferCard, PlantName, PlantPrice, OfferImg, OfferInformation } from '../../pages/Home/PlantCard/style'
import { CardHeader } from '../../shared/card';
import { CloseButton } from '../ShoppingCart/style';

export const CartCardDiv = styled(OfferCard)`
    width: 100%;
    
    box-shadow: none;
    max-height: 120px;
    border-bottom: 2px solid grey;
    
    ${OfferInformation}{
        width: 45%;
    }

`
export const RemoveButton =styled(CloseButton)`
    width: fit-content;
    
`
export const CartCardHeader = styled(CardHeader)`
    display: flex;
    height: 100%;
    width: 100%;
    ${OfferImg}{
        width: 150px;
        height: 100%;
    }
   
`
export const Quantity = styled.div`
    width: fit-content;
    border: 2px solid green;
    height: fit-content;
    display: flex;
    align-items: center;
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

    span{
        font-size: 12px;
    }
`
export const SmallPlantName = styled(PlantName)`
    font-size: 18px;
`

export const SmallPlantPrice = styled(PlantPrice)`
    font-size: 14px;
`


