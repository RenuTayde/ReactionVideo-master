import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ScreenRecording from "./ScreenRecording"; 
import Navbar from "./Navbar";

const Router = () => (
  <BrowserRouter>
  <Navbar />
    <Routes>
    
      <Route exact path="/" element={<ScreenRecording />} /> 
      
      {/* <Route exact path="/video" element={<Video />} />  */}
    </Routes>
  </BrowserRouter>
);
export default Router;
