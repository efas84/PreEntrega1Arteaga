import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div class="text-bg-primary p-4 m-5">
            <h1 >{greeting}</h1>
        </div>
    )
}

export default ItemListContainer