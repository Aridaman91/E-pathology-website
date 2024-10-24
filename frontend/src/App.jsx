import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

import { About } from './Components/About/About';
import { Newtest } from "./Components/Newtest/Newtest";
import Dg from "./Components/Dg/Dg";
import { Reports } from './Components/Reports/Reports';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Links from './Components/Links/Links';
import Picture from './Components/Picture/Picture';
import Header from './Components/Header/Header';
import  Abhay  from "./Components/Abhay/Abhay";

import Login from "./Components/Login/Login";

const HomePageLayout = () => {
  return (
    <div className="App">
     
      <Home />
      <Links />
       <Abhay/>
       
       <Picture /> 
        <Header />
    </div>
  );
};

const App = () => {

  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/Newtest" element={<Newtest/>}/>
        <Route path="/Dg" element={<Dg/>}/>
        
       
        <Route path="/reports" element={<Reports />} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;


