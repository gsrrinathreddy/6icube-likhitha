
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './pages/About';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="About" element={<About/>}/>
        <Route path="Blog" element={<Blog/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Events" element={<Events/>}/>
        <Route path="Home" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Registration' element={<Registration/>}/>

      </Routes>
    
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
