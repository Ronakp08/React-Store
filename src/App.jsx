import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Header from "./components/Header";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/Footer";
import Details from "./components/Details";
import LoginPage from "./components/Login";
import RegistrationPage from "./components/Register";
import MensProduct from "./components/MensProduct";
import Women from "./components/Women";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
          <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/mens" element={<MensProduct />} />
        <Route path="/women" element={<Women />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:productId" element={<Details />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage/>}/>
        </Routes>
        <Footer/>     
    </Router>
  );
}

export default App;
