
import './App.css';
import Intro from './Componunts/Intro';
import Navbar from './Componunts/Navbar';
import Skills from './Componunts/Skills';
import Aboutme from './Componunts/Aboutme';

function App() {
  return (
   <div>
     <Navbar/>
    <Intro/>
    <Aboutme/>
    <Skills/>
   </div>
  );
}

export default App;
