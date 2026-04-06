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
import Details from "./components/Details"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;