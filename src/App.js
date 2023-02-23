import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Ourteam_experts from "./components/Our Story/Our Team/ourteam_experts/ourteam_experts";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/Our Story/About Unicorn/About";
import ContactUs from "./components/Contact Us/ContactUs";
import Wedo from "./components/Our Story/What we do/Wedo";
import OurTeam from "./components/Our Story/Our Team/OurTeam"
import Corevalues from "./components/Our Story/Core Values/Corevalues";
import ClinicalOperations from "./components/Practice Areas/ClinicalOperations";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact Us" element={<ContactUs />}></Route>
        <Route path="About us" element={<About />}></Route>
        <Route path="What We Do" element={<Wedo />}></Route>
        <Route path="Our Team" element={<OurTeam />}></Route>
        <Route path="Core Values" element={<Corevalues />}></Route>
        <Route path="Pratice Areas" element={<ClinicalOperations />}></Route>
        <Route path="Ourteam_experts" element={<Ourteam_experts />}></Route>


        





      </Routes>
    </>
  );
};

export default App;
