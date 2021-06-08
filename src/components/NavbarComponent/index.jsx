import './estilos.css';

export const NavBarComponent = () => {
    return (
        <header className="header">
            <h1 className="logo">LOGO</h1>
            <nav className="nav">
                <ul>
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                    <li><a>Link 3</a></li>
                </ul>
            </nav>
        </header>
    )
}