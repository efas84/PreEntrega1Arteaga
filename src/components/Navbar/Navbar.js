import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Meat-Commerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={'/category/Res'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Res</NavLink>
                <NavLink to={'/category/Puerco'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Puerco</NavLink>
                <NavLink to={'/category/Especiales'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Especiales</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar