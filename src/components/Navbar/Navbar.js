import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Meat-commerce</h3>
            <div>
                <button>Res</button>
                <button>Puerco</button>
                <button>Especiales</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar