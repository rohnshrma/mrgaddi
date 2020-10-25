import React from "react";
import Header from "./Header";
import Services from "./Services";
import Pricing from "./Pricing";
import Counting from "./Counting";
import About from "./About";
import Testimonial from "./Testimonial";
import Contact from "./Contact"
import Footer from "./Footer";
// import About from "./About";
function App() {
  return (
    <div>
      <Header />
      <About />
      <Pricing />
      <Testimonial />
      <Services />
      <Counting />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
