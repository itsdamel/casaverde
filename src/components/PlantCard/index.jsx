import {OfferCard, OfferImg, OfferInformation, PlantPrice, BuyButton, PlantName} from './style';

export default function PlantCard({plant, addToCart, displayCart}){

    const handleCart =()=>{
        addToCart(plant)
        displayCart()
    }
     
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