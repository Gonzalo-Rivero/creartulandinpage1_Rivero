import { useState } from "react";
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
                    <div className="navbar-logo">
                        <img
                            src="./img/logo-el-gordo-burguer.png"
                            alt="El Gordo Burguer Logo"
                            className="logo-image"
                        />
                        <div className="logo-text">
                            El Gordo Burguer
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar-menu desktop-menu">
                        <a href="#" className="nav-link">Inicio</a>
                        <a href="#" className="nav-link">Menú</a>
                        <a href="#" className="nav-link">Combos</a>
                        <a href="#" className="nav-link">Promociones</a>
                        <a href="#" className="nav-link">Contacto</a>
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
                        <a href="#" className="mobile-nav-link">Inicio</a>
                        <a href="#" className="mobile-nav-link">Menú</a>
                        <a href="#" className="mobile-nav-link">Combos</a>
                        <a href="#" className="mobile-nav-link">Promociones</a>
                        <a href="#" className="mobile-nav-link">Contacto</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Na