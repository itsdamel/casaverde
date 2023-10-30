import { useEffect, useState } from "react";

export const usePlant = () => {
    function Plant(id, name, price, img, inStock){
        this.id = id
        this.name = name
        this.price = price
        this.img = img
        this.inStock = inStock
        this.inShoppingCart = false;
    }

    function createPlantObject(plant){
        return new Plant(plant.id, plant.name, plant.price, plant.img, plant.inStock)
    }

    const [plants, setPlants] = useState([])
    
    useEffect(()=>{
        const getPlants = async() =>{
            let response = await fetch('http://localhost:3333/plants')
            let responseJson = await response.json()
            setPlants(responseJson.map((plant)=> createPlantObject(plant)))
        }
        

    getPlants()
    
    }, [])

    return plants;
}
