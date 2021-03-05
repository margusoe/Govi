import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import ProductGrid from "./components/ProductGrid";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import About from "./components/About";
const App = () => {
  return (
    <Router>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ProductGrid />
      <About />
      <Subscribe />
      <Footer />
    </Router>
  );
};

export default App;
