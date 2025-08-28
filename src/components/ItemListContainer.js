import { Pizza, Coffee, Utensils, Clock, Star, Truck, Shield } from "lucide-react";
import '../css/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const categories = [
        {
            icon: Pizza,
            name: "Hamburguesas",
            count: "25+ variedades",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop&crop=center"
        },
        {
            icon: Coffee,
            name: "Bebidas",
            count: "20+ opciones",
            image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=300&h=200&fit=crop&crop=center"
        },
        {
            icon: Utensils,
            name: "Acompañamientos",
            count: "15+ sides",
            image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop&crop=center"
        },
        {
            icon: Clock,
            name: "Combos",
            count: "10+ combos",
            image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=200&fit=crop&crop=center"
        }
    ];

    const features = [
        { icon: Truck, title: "Delivery Gratis", desc: "En órdenes mayores a $15.000" },
        { icon: Shield, title: "Calidad Premium", desc: "Ingredientes frescos y naturales" },
        { icon: Clock, title: "Entrega Rápida", desc: "En 30 minutos o es gratis" }
    ];

    const burgers = [
        {
            name: "La Clásica",
            description: "Carne 100% vacuna, lechuga, tomate, cebolla y nuestra salsa especial",
            price: "$8.990",
            image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop&crop=center",
            badge: "Bestseller"
        },
        {
            name: "La Gorda",
            description: "Doble carne, queso cheddar, panceta, huevo frito y papas pay",
            price: "$12.990",
            image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop&crop=center",
            badge: "Especial"
        },
        {
            name: "La Crispy",
            description: "Pollo crispy, salsa ranch, lechuga americana y aros de cebolla",
            price: "$9.990",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
            badge: "Nuevo"
        }
    ];

    return (
        <div className="main-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-logo">
                        <img
                            src="/img/logo-burger.webp" // RUTA CORREGIDA: Ahora busca en /public/img
                            alt="El Gordo Burguer Logo"
                            className="hero-logo-image"
                        />
                    </div>
                    <h1 className="hero-title">
                        {greeting}
                    </h1>
                    <p className="hero-subtitle">
                        Las hamburguesas más deliciosas de la ciudad con ingredientes frescos y sabor auténtico
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Ver Menú</button>
                        <button className="btn-secondary">Hacer Pedido</button>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Nuestro Menú</h2>
                        <p className="section-subtitle">Explora nuestra deliciosa variedad de hamburguesas y acompañamientos</p>
                    </div>

                    <div className="categories-grid">
                        {categories.map((category, index) => (
                            <div key={index} className="category-card">
                                <div className="category-image-container">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="category-image"
                                    />
                                    <div className="category-overlay"></div>
                                </div>
                                <div className="category-content">
                                    <div className="category-icon">
                                        <category.icon size={32} />
                                    </div>
                                    <h3 className="category-name">{category.name}</h3>
                                    <p className="category-count">{category.count}</p>
                                    <button className="category-button">Ver menú →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Burgers Section */}
            <div className="featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title white-text">Nuestras Especialidades</h2>
                        <p className="section-subtitle gray-text">Las hamburguesas más populares que te harán volver</p>
                    </div>

                    <div className="burgers-grid">
                        {burgers.map((burger, index) => (
                            <div key={index} className="burger-card">
                                <div className="burger-image-container">
                                    <img
                                        src={burger.image}
                                        alt={burger.name}
                                        className="burger-image"
                                    />
                                    <div className={`burger-badge ${burger.badge.toLowerCase()}`}>
                                        {burger.badge}
                                    </div>
                                </div>
                                <div className="burger-content">
                                    <h3 className="burger-name">{burger.name}</h3>
                                    <p className="burger-description">{burger.description}</p>
                                    <div className="burger-footer">
                                        <span className="burger-price">{burger.price}</span>
                                        <button className="add-button">Agregar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title white-text">¿Por qué elegir El Gordo Burguer?</h2>
                        <p className="section-subtitle gray-text">Beneficios únicos que nos hacen especiales</p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Variedades</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10K+</div>
                            <div className="stat-label">Clientes Felices</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Satisfacción</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number-container">
                                <span className="stat-number">4.8</span>
                                <Star className="star-icon" size={32} fill="#F59E0B" color="#F59E0B" />
                            </div>
                            <div className="stat-label">Rating</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">¡Ordena ahora!</h2>
                        <p className="cta-subtitle">
                            Únete a miles de clientes satisfechos y prueba las mejores hamburguesas de la ciudad
                        </p>
                        <button className="cta-button">Hacer Pedido Ahora</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;