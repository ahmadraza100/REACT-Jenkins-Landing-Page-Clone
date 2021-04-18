
import './App.css';
import NavBar from "./Components/navbar/Nav"
import Hero from "./Components/hero/hero"
import Carsoul from "./Components/carsoul/carsoul"
import Features from "./Components/feauture/features"
import Iframe from "./Components/embed/iframe"
import Slider from "./Components/CardSlider/Slider"
import Blogs from "./Components/Blogs/Blogs.js"
import Regards from "./Components/credits/regards.js"
import FooterPage from "./Components/footer/FooterPage.js"




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Carsoul/>
      <Features/>
      <Iframe/>
      <Slider/>
      <Blogs/>
      <Regards/>
      <FooterPage/>
      
      
    </div>
  );
}

export default App;
