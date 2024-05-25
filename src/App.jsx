import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Hero2 from "./Components/Hero2.jsx";
import Different from './Components/Different.jsx';
import Values from './Components/Values.jsx';
import Footer from './Components/Footer.jsx';
import Stats from './Components/Stats.jsx';
import Reviews from './Components/Reviews.jsx';


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <Stats />
      <Values />
      <Different />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
