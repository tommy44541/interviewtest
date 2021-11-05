import React from 'react';
import ProductListing from "../ProductListing/ProductListing";
import Sidebar from "../Sidebar/Sidebar";
import "./HeroSection.scss";

const HeroSection = () => {
    return (
        <div className="Hero-wrapper">
           <Sidebar />
           <ProductListing /> 
        </div>
    );
};

export default HeroSection;