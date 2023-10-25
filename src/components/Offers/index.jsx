import { Cursive } from "../../shared/cursive";
import { OfferContent, OffersHeader } from "./style";
import { Paragraph } from "../../shared/paragraph";
import {BaseSection} from '../../shared/BaseSection'
import PlantCard from "../PlantCard";
import { useEffect, useState } from "react";

export default function Offers(){
    const [plants, setPlants] = useState([])
 
    useEffect(()=>{
        const getPlants = async() =>{
            let response = await fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw')
            let responseJson = await response.json()
            setPlants(responseJson)
        }

       getPlants()
    }, [])

    return(
        <BaseSection>
            <OffersHeader>
                <Paragraph>conheça nossas</Paragraph>
                <Cursive >ofertas</Cursive>
            </OffersHeader>
            <OfferContent>
                {plants.map((plant) => <PlantCard key={plants.indexOf(plant)} name={plant.name} image={`assets/${plant.img}.png`} price={plant.preco}/>)}
            </OfferContent>
        </BaseSection>
    )
    
}

