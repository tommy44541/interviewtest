import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import Carousel from './components/Carousel/Carousel';
import Counter from './components/Counter/Counter';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <React.Fragment>
       <Header/>
       <Carousel />
       <Counter/>
       <HeroSection />
       <Footer />
    </React.Fragment>
   
  );
}

export default App;
