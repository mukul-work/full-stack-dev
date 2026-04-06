// import { useState } from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import './App.css'
// import News from './components/News'

// function App() {



//   return (
//     <>
//       <Header />
//       <News />
//       <Footer />
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/abcd" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;