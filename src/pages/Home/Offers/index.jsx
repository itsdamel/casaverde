import { Cursive } from '../../../shared/cursive';
import { OfferContent, OffersHeader, Filter } from './style';
import { Paragraph } from '../../../shared/paragraph';
import {BaseSection} from '../../../shared/BaseSection';
import PlantCard from '../PlantCard';
import { usePlant } from '../../../hooks/usePlant';
import { ToastContainer } from 'react-toastify';
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
                console.log('cheap')
                break;
            case 'expensive':
                sortedArray = plants.sort(fromExpensive)
                console.log('expensive')
                
            break;
        }
        setToRender([...sortedArray]);
        
    }
    
    return(
        <BaseSection id="Offers">
            <ToastContainer role="alert" containerId={addToCart} />
            <OffersHeader>
                <Paragraph>conheça nossas</Paragraph>
                <Cursive >plantas</Cursive>
            </OffersHeader>
            <Filter>
                <select defaultValue={'header'} onChange={handleFilter} ref={filter} placeholder="Selecione">
                    <option value='header' hidden>Filtre nossos produtos</option>
                    <option value='cheaper' >Mais baratas</option>
                    <option value='expensive'>Mais caras</option>
                </select>
                {/* <input type="range" min={20} max={35} step='5'></input> */}
            </Filter>
            <OfferContent>

                {filterOn ? toRender.map((plant) => <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />) : plants.map((plant) => <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />)}
            </OfferContent>
        </BaseSection>
    )
    
}

