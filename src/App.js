import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
