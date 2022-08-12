import React from "react";
import "./App.css";
import {
  About,
  Contacts,
  Faqs,
  Footer,
  Header,
  Navbar,
  Reviews,
  Services,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <About />
      <Faqs />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
