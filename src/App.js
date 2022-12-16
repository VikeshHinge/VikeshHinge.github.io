
import './App.css';
import Intro from './Componunts/Intro';
import Navbar from './Componunts/Navbar';
import Skills from './Componunts/Skills';
import Aboutme from './Componunts/Aboutme';
import Footer from './Componunts/Footer';
import Projects from './Componunts/Projects';
function App() {
  return (
   <div>
     <Navbar/>
      <Intro/>
     <Aboutme/>
      <Projects/> 
     <Skills/> 
     <Footer/> 
   </div>
  );
}

export default App;
