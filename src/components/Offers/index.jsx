import { Cursive } from "../../shared/cursive";
import { OfferContent, OffersHeader } from "./style";
import { Paragraph } from "../../shared/paragraph";
import {BaseSection} from '../../shared/BaseSection'
import PlantCard from "../PlantCard";
import { usePlant } from "../../hooks/usePlant";
import { ToastContainer } from 'react-toastify';
export default function Offers({addToCart}){
    const plants = usePlant();

    return(
        <BaseSection id="Offers">
            <ToastContainer role="alert" containerId={addToCart} />
            <OffersHeader>
                <Paragraph>conheça nossas</Paragraph>
                <Cursive >plantas</Cursive>
            </OffersHeader>
            <OfferContent>
                {plants.map((plant) => <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />)}
            </OfferContent>
        </BaseSection>
    )
    
}

