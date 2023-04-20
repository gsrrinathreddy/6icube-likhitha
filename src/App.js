import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Hobbies from'./components/Pages/Hobbies';
import Aboutus from './components/Pages/Aboutus';
import Experience from'./components/Pages/Experience';
import Qualification from './components/Pages/Qualifications';
import Skills from './components/Pages/Skills';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Qualifications" element={<Qualification/>}/>
              </Routes>
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
