import Layout from './components/Layout';
import Hero from './components/Hero';
import EmotionalContext from './components/EmotionalContext';
import BasketsShowcase from './components/BasketsShowcase';
import Differential from './components/Differential';
import Confidence from './components/Confidence';
import FinalCTA from './components/FinalCTA';

import './App.css';

function App() {
  return (
    <Layout>
      <div id="home">
        <Hero />
      </div>
      <div id="emotional-context">
        <EmotionalContext />
      </div>
      <div id="baskets">
        <BasketsShowcase />
      </div>
      <div id="differential">
        <Differential />
      </div>
      <div id="confidence">
        <Confidence />
      </div>
      <FinalCTA />
    </Layout>
  );
}

export default App;
