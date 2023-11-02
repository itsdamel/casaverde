import { useEffect, useState } from "react";

export const usePlant = () => {
    class ProductPlant { 
        constructor(id, name, price, img, inStock)
        { 
            this.id = id
            this.name = name
            this.price = price
            this.img = img
            this.inStock = inStock
            this.inShoppingCart = this.quantity > 0 ? true : false
            this.quantityInCart = 0;
        }
       
    
        
    }
    function createPlantObject(plant){
        return new ProductPlant(plant.id, plant.name, plant.price, plant.img, plant.inStock)
    }

    const [plants, setPlants] = useState([])
    
    useEffect(()=>{
        async function fetchPlants(){
          try {
            const response = await fetch('https://casaverde-backend-itsdamel.onrender.com/get-plants');
            !response.ok&&console.log(`Failed to fetch data: ${response.status}`);
            const responseJson = await response.json();
            const plantObjects = await responseJson.plants.map((response) => createPlantObject(response));
            setPlants(plantObjects);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchPlants();
    }, []); 
    
    return plants;
}
