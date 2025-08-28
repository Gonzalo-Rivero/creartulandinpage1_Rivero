import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './css/App.css';

// Importa los componentes de las páginas
import Menu from './pages/Menu';
import Combos from './pages/Combos';
import Promociones from './pages/Promociones';
import Contacto from './pages/Contacto';

function App() {
    const greeting = "¡Bienvenido a El Gordo Burguer!";

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {/* El componente de la página de inicio ahora se renderiza solo cuando la ruta es exactamente "/" */}
                <Route path="/" element={<ItemListContainer greeting={greeting} />} />

                {/* Los otros componentes de página se renderizan en sus rutas respectivas */}
                <Route path="/menu" element={<Menu />} />
                <Route path="/combos" element={<Combos />} />
                <Route path="/promociones" element={<Promociones />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;