import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="container">

    
   <Routes>
    <Route path="/" exact element={<Home/>}/>
   
    <Route path="/movie/:imbdID" element={<MovieDetails/>}/>
  <Route element={<PageNotFound/>}/>
   </Routes>
   </div>
  <Footer/>
   </BrowserRouter>
  );
}

