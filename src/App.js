
import { useState, useEffect } from "react";
import axios from 'axios'
import Header from "./components/Header";
import StockData from "./components/StockData";
import Predictions from "./components/Predictions";

function App() {



  

  return (
    <div className="bg-[#AEC6CF] w-full h-full">
      <Header />
      <Predictions/>

      <StockData/>
    
    </div> 
  );
}

export default App;
