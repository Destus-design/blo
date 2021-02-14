import React from 'react';
import '../App.css';
import Cards from '../pages/Cards';
import HeroSection from '../pages/HeroSection';
import Footer from '../pages/Footer';
import Rightnewsdata from '../pages/Rightnewsdata';


function Home() {
  return (
    <>
    <div className=" content__blog__container cards container-fluid ">
      <div className="row m-lg-3">
        <div className="col-md-8">
          <HeroSection />
          <Cards />
        </div>
        <div className=" col-md-4">
        <Rightnewsdata />
      </div>
      </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;