import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import '../css/CartWidget.css';

const CartWidget = () => {
    const [cartCount, setCartCount] = useState(3);

    return (
        <div className="cart-widget">
            <div className="cart-container">
                <ShoppingCart className="cart-icon" size={24} />
                {cartCount > 0 && (
                    <span className="cart-count">
                        {cartCount}
                    </span>
                )}
            </div>
        </div>
    );
};

export default CartWi