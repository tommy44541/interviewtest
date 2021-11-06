import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import Carousel from './components/Carousel/Carousel';
import Counter from './components/Counter/Counter';
import HeroSection from './components/HeroSection/HeroSection';
import TopBtn from './components/Button/TopBtn';
//import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <React.Fragment>
       <Header/>
       <Carousel />
       <Counter/>
       <HeroSection />
       <Footer />
       <TopBtn />
    </React.Fragment>
   
  );
}

export default App;
