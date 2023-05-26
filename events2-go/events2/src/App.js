
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './pages/About';
import Blog from './pages/Blog';
import Navebar from './components/Navebar';

import Events from './pages/Events';
import Home from './pages/Home';
import Contact from './pages/Contact';

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

      </Routes>
    
     </BrowserRouter>
     <Navebar />
    </div>
  );
}

export default App;
