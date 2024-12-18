import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ServicesContent from '../components/ServicesContent';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-10">
      <Header/>
      <ServicesContent />
      <Footer/>
     
    
    </div>
  );
};

export default Services;
