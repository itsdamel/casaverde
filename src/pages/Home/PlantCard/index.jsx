import CartContext from '../../../context/cartContext';
import {OfferCard, OfferImg, OfferInformation, PlantPrice, BuyButton, PlantName} from './style';
import { useContext } from 'react';

export default function PlantCard({plant}){
    const { addToCart } = useContext(CartContext)
    const handleCart = () => addToCart(plant);
     
    return(
        <OfferCard>

            <OfferImg backgroundpath={'assets/' + plant.img}>


            </OfferImg>

            <OfferInformation>
               
                <PlantName>{plant.name}</PlantName>
                <PlantPrice >R${plant.price},00</PlantPrice>
            
                <BuyButton onClick={handleCart}>Comprar <img src='assets/yellow-arrow.svg'></img></BuyButton>
            </OfferInformation>
           
        </OfferCard>
    )
}