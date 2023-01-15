import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plan from './components/Plan/Plan';
//import Plans from './components/Plans/Plans';
import Programe from './components/Programe/Programe';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programe/>
          <Reasons/>
         <Plan/>
         <Testimonial/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
