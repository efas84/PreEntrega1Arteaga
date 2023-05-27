import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })

    }, [itemId])

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    )
}
export default CartItem