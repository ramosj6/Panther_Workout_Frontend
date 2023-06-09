import './App.css';
import Footer from './components/Footer/footer';
import Hero from './components/Hero/hero';
import Join from './components/Join/join';
import Programs from './components/Programs/programs';
import Reasons from './components/Reasons/reasons';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Join />
      <Footer />
    </div>
  );
}

export default App;
