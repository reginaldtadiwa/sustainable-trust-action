import React from 'react';
import Header from './components/Header';
import TestHero from './components/TestHero';
import PriorityAreas from './components/PriorityAreas';
import Objectives from './components/Objectives';
import Beneficiaries from './components/Beneficiaries';
import MainActivities from './components/MainActivities';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      <Header />
      <TestHero />
      <Objectives />
      <PriorityAreas /> 
      <MainActivities />
      <Beneficiaries />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;