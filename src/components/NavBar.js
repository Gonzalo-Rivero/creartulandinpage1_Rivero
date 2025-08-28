import { useState } from "react";
import { Link } from 'react-router-dom'; // Importamos Link
import { Menu, X } from "lucide-react";
import CartWidget from "./CartWidget";
import '../css/NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link to="/" className="navbar-logo-link">
                        <div className="navbar-logo">
                            <img
                                src="/img/logo-burger.webp"
                                alt="El Gordo Burguer Logo"
                                className="logo-image"
                            />
                            <div className="logo-text">
                                El Gordo Burguer
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="navbar-menu desktop-menu">
                        <Link to="/" className="nav-link">Inicio</Link>
                        <Link to="/menu" className="nav-link">Menú</Link>
                        <Link to="/combos" className="nav-link">Combos</Link>
                        <Link to="/promociones" className="nav-link">Promociones</Link>
                        <Link to="/contacto" className="nav-link">Contacto</Link>
                    </div>

                    {/* Cart Widget */}
                    <div className="navbar-cart desktop-cart">
                        <CartWidget />
                    </div>

                    {/* Mobile menu button */}
                    <div className="mobile-menu-container">
                        <CartWidget />
                        <button
                            onClick={toggleMenu}
                            className="mobile-menu-button"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-content">
                        <Link to="/" className="mobile-nav-link">Inicio</Link>
                        <Link to="/menu" className="mobile-nav-link">Menú</Link>
                        <Link to="/combos" className="mobile-nav-link">Combos</Link>
                        <Link to="/promociones" className="mobile-nav-link">Promociones</Link>
                        <Link to="/contacto" className="mobile-nav-link">Contacto</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;