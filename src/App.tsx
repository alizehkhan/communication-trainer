import { BrowserRouter } from 'react-router-dom';
import './index.css';
import About from './sections/About';
import Approach from './sections/Approach';
import Hero from './sections/Hero';
import Quote from './sections/Quote';
import Workshops from './sections/Workshops';
import Contact from './sections/Contact';

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Approach />
      <Workshops />
      <Quote />
      <About />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
