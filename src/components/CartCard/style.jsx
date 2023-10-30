import styled from "styled-components";
import { OfferCard, PlantName, PlantPrice, OfferImg, OfferInformation } from "../PlantCard/style";
import { CardHeader } from "../../shared/card";
import { CloseButton } from "../ShoppingCart/style";
export const CartCardDiv = styled(OfferCard)`
    width: 100%;
    justify-content: space-between;
    box-shadow: none;
    height: fit-content;
    border-bottom: 2px solid grey;

    
`
export const RemoveButton =styled(CloseButton)`
    
`
export const CartCardHeader = styled(CardHeader)`
    display: flex;
    height: 100%;
    width: 65%;
    ${OfferImg}{
        width: 100px;
        height: 100px;
        
    }
    ${OfferInformation}{
        border:2px solid red;
    }
`

export const SmallPlantName = styled(PlantName)`
    font-size: 18px;
`

export const SmallPlantPrice = styled(PlantPrice)`
    font-size: 14px;
`



