import React from "react";
import Hero from "../components/Hero";

import Speciality from "../components/Speciality";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Home() {
  return <div className="mx-32">
    <Hero/>
    <Speciality/>
    <TopDoctors/>
    <Banner/>
    <Footer/>
   
  </div>;
}

export default Home;
