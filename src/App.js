import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tour from "./components/Tour";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tour></Tour>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
