import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/NavbarComponent';
import { CartWidget } from './components/NavbarComponent/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';




function App() {
  const productos = [
    {id: 1, nombre: 'Guitarra Gibson Acústica', precio: 52000},
    {id: 1, nombre: 'Guitarra Fender Eléctrica', precio: 52000},
    {id: 1, nombre: 'Guitarra Gracia Acústica', precio: 52000}
  ];

  return (
    
    <div className="App">
     <NavBarComponent/>
     <ItemListContainer gretting={productos[0]}/>
     <ItemListContainer gretting={productos[1]}/>
     <ItemListContainer gretting={productos[2]}/>
     
    </div>
  );
}

export default App;
