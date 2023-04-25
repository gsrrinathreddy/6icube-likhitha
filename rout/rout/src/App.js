import './App.css';
import Navbar from './Components/Navbar';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Cosmetics from './pages/Cosmetics';
import Clothing from './pages/Clothing';
import Grocery from './pages/Grocery'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Cosmetics" element={<Cosmetics/>}/>
        <Route path="Clothing" element={<Clothing/>}/>
        <Route path="Grocery" element={<Grocery/>}/>
      </Routes>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
