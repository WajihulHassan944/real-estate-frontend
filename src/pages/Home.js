import React from 'react';
import Banner from '../components/Home/Banner';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import RegisterSection from '../components/RegisterSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-10">
      <Header/>
      <Banner />
      <WhyChooseUs />
      <RegisterSection />
      <Footer/>
     
    
    </div>
  );
};

export default Home;
