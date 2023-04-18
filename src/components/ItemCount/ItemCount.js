import { Button } from "bootstrap"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';



const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div class="d-grid gap-2 d-md-block">
            <div class="d-grid gap-2 d-md-block" >
                <button class="btn btn-primary" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button class="btn btn-primary" onClick={increment}>+</button>
            </div>
        <div>
            <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                 Agregar al carrito 
                 </button>
                 </div>
                 </div>
    )
}
export default ItemCount
