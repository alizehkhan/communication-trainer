import { BrowserRouter } from 'react-router-dom';
import './index.css';
import About from './sections/About';
import Approach from './sections/Approach';
import Hero from './sections/Hero';
import Quote from './sections/Quote';
import Topics from './sections/Topics';

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Approach />
      <Topics />
      <Quote />
      <About />
    </BrowserRouter>
  );
}

export default App;
