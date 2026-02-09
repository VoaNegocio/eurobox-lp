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
      <Hero />
      <EmotionalContext />
      <BasketsShowcase />
      <Differential />
      <Confidence />
      <FinalCTA />
    </Layout>
  );
}

export default App;
