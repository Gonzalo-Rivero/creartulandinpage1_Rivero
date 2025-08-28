import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './css/App.css';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a El Gordo Burguer!" />
        </div>
    );
};

export default 