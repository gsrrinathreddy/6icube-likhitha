
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Albums from './pages/Albums';
import Appbar from './pages/Appbar';
import Photos from './pages/Photos';
import Products from './pages/Products';
import Users from './pages/Users';
 const Navpages=['Products', 'Albums', 'Appbar','Users','Photos']
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar pages={Navpages} bgcolor="orange" buttoncolor="black"/>
      <Routes>
        <Route path="Albums" element={<Albums/>}/>
        <Route path="Appbar" element={<Appbar/>}/>
        <Route path="Photos" element={<Photos/>}/>
        <Route path="Products" element={<Products/>}/>
        <Route path="Users" element={<Users/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
