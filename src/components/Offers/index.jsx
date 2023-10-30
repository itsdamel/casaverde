import { Cursive } from "../../shared/cursive";
import { OfferContent, OffersHeader } from "./style";
import { Paragraph } from "../../shared/paragraph";
import {BaseSection} from '../../shared/BaseSection'
import PlantCard from "../PlantCard";
import { usePlant } from "../../hooks/usePlant";


export default function Offers({addToCart, displayCart}){
    const plants = usePlant();

    return(
        <BaseSection id="Offers">
            <OffersHeader>
                <Paragraph>conheça nossas</Paragraph>
                <Cursive >plantas</Cursive>
            </OffersHeader>
            <OfferContent>
                {plants.map((plant) => <PlantCard key={plant.id} plant={plant} displayCart={displayCart} addToCart={addToCart} />)}
            </OfferContent>
        </BaseSection>
    )
    
}

