import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "./componenets/Header";
import Hero from "./componenets/Hero";
import AboutUs from "./componenets/AboutUs";
import Services from "./componenets/Services";
import GlobalPresence from "./componenets/GlobalPresence";
import Testimonials from "./componenets/Testimonials";
import Footer from "./componenets/Footer";
import Contact from "./componenets/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <GlobalPresence />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
