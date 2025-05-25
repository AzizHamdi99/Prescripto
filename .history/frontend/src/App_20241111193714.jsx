import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Appointments from "./pages/Appointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import './App.css'
import Footer from "./components/Footer";
import Test from "./pages/Test";
import Testtime from "./pages/Testtime";
function App() {
  return (
    <div className="mx-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/test" element={<Test/>}/>
        <Route path="/testt" element={<Testtime/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
