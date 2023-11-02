//Styled components
import BaseCursive from '../../../shared/Base/BaseCursive';
import { OfferContent, OffersHeader} from './style';
import BaseParagraph  from '../../../shared/Base/BaseParagraph';
import BaseSection from '../../../shared/Base/BaseSection';
import PlantCard from '../PlantCard';
import BaseFlexDiv from '../../../shared/Base/BaseFlexDiv';
//hooks
import { usePlant } from '../../../hooks/usePlant';
import { useRef, useState } from 'react';


export default function Offers({addToCart}){

    let plants = usePlant();
    const filter = useRef();
    let filterOn = false;
    const [toRender, setToRender] = useState(null)
   

    function fromCheapest(first, follow){
       return first.price - follow.price;
       
    }
    function fromExpensive(first, follow){
        return follow.price - first.price
    }
    const handleFilter = () =>{
        let selected = filter.current.value;
        filterOn = true;
        let sortedArray = []
        switch(selected){
            case 'cheaper':
                sortedArray = plants.sort(fromCheapest);
                
                break;
            case 'expensive':
                sortedArray = plants.sort(fromExpensive)
                
                
            break;
        }
        setToRender([...sortedArray]);
        
    }
    
    return(
        <BaseSection id="Offers">
            <OffersHeader>
                <BaseParagraph>conheça nossas</BaseParagraph>
                <BaseCursive >plantas</BaseCursive>
            </OffersHeader>
            <BaseFlexDiv>
                <select defaultValue={'header'} onChange={handleFilter} ref={filter} placeholder="Selecione">
                    <option value='header' hidden>Filtre nossos produtos</option>
                    <option value='cheaper' >Mais baratas</option>
                    <option value='expensive'>Mais caras</option>
                </select>
    
            </BaseFlexDiv>
            <OfferContent>

                {filterOn ? toRender.map((plant) => <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />) : plants.map((plant) => <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />)}
            </OfferContent>
        </BaseSection>
    )
    
}

