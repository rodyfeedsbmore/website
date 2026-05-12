import React from "react";

// styles
import '../src/App.css';

// components

import Rody from "../components/rody";
import DonorCarousel from "../components/donors";


function App() {
  return (
    <div className="App">
  
      <main className="container">

        <Rody />
       
        <DonorCarousel />
        
      </main>
    </div>
  )
}

export default App