import { CartCardDiv, CartCardHeader, SmallPlantName, SmallPlantPrice, RemoveButton } from "./style";
import { CardHeader} from "../../shared/card";
import { OfferInformation, OfferImg} from "../PlantCard/style";

export function CartCard({product, remove}){
    const handleRemove =() =>{
        remove(product)
    }
    return(
       <CartCardDiv>
            <CartCardHeader>
                <OfferImg backgroundpath={'assets/'+product.img}>

                </OfferImg>
                <OfferInformation>
                    <SmallPlantName>{product.name}</SmallPlantName>
                    <SmallPlantPrice>R${product.price},00</SmallPlantPrice>
                </OfferInformation>
            </CartCardHeader>
            <RemoveButton onClick={handleRemove} src='assets/remove.png' alt='remove'
            />
       </CartCardDiv>
    )
}

