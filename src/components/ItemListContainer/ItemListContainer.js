import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'; 
//import { Router } from 'react-router-dom';
//import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/analytics'
import { analytics } from '../../services/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ?query(collection(analytics, 'products'), where('category', '==', categoryId))
        : collection(analytics, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

        /*const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })*/
    }, [categoryId])

    return (
        <div class="text-bg-primary p-4 m-5">
            <h1 >{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer 