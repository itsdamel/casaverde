import { CartCardDiv, CartCardHeader, SmallPlantName, SmallPlantPrice, RemoveButton, Quantity } from './style';
import { useState, useContext } from 'react';
import { OfferInformation, OfferImg} from '../../pages/Home/PlantCard/style';
import CartContext  from '../../context/cartContext';

export function CartCard( {handleTotal, product} ){

    const [quantity, setQuantity] = useState(product.quantityInCart);

    const { removeFromCart } = useContext(CartContext);
    const handleRemove =() =>{
        removeFromCart(product)
    }
    const incrementQuantity = () => {

        setQuantity(quantity + 1)
        product.quantityInCart += 1;
        handleTotal()

    }
    const decrementQuantity = () => {

        setQuantity(quantity - 1)
        product.quantityInCart -= 1
        product.quantityInCart == 0&&remove(product)
        handleTotal()
    }

    return(
       <CartCardDiv>
            <CartCardHeader>
                <OfferImg backgroundpath={'assets/' + product.img}>

                </OfferImg>
                <OfferInformation>
                    <SmallPlantName>{product.name}</SmallPlantName>
                    <SmallPlantPrice>R${product.price},00</SmallPlantPrice>
                    <Quantity>
                        <button onClick={decrementQuantity}>-</button>
                            <span>{quantity}</span>
                        <button onClick={incrementQuantity}>+</button>
                    </Quantity>
                    
                </OfferInformation>
            </CartCardHeader>
            <OfferInformation>
                <span>x{product.quantityInCart} R${product.quantityInCart * product.price}</span>

                    
            </OfferInformation>
            <RemoveButton onClick={handleRemove} src='assets/remove.png' alt='remove'
            />
       </CartCardDiv>
    )
}

