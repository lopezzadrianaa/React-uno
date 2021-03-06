import { CartWidget } from './CartWidget';
import './estilos.css';



export const NavBarComponent = () => {
    return (
        <header className="header">
            <h1 className="logo">LOGO</h1>
            <nav className="nav">
                <ul>
                    <li><a>Acústicas</a></li>
                    <li><a>Electroacústicas</a></li>
                    <li><a>Eléctricas</a></li>
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}