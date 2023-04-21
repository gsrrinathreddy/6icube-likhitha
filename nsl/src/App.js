import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom'

import Aboutme from './pages/Aboutme';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Aboutme" element={<Aboutme/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Qualifications" element={<Qualification/>}/>
              </Routes>
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
