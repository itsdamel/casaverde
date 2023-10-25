import {OfferCard, OfferImg, OfferInformation, PlantPrice, BuyButton, PlantName} from './style';

export default function PlantCard({name, image, price}){
    return(
        <OfferCard>

            <OfferImg backgroundpath={image}></OfferImg>

            <OfferInformation>
               
                <PlantName>{name}</PlantName>
                <PlantPrice >R${price}</PlantPrice>
            
                <BuyButton>Comprar <img src='assets/yellow-arrow.svg'></img></BuyButton>
            </OfferInformation>
           
        </OfferCard>
    )
}