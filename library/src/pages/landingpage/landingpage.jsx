import React from "react";
import "./landingpage.css";
import Navbar from "../../components/navbar/navbar.jsx";
import Carousel from "../../components/carousel/carousel.jsx";
import Footer from "../../components/footer/footer.jsx";
import About from "../../components/about/about.jsx";
import Contact from "../../components/contact/contact.jsx";
import Category from "../../components/category/category.jsx";

const landingpage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Category/>
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default landingpage;
