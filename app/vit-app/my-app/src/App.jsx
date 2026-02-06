import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import Component1 from './components/component.jsx'
import Main from './components/main.jsx'

function App() { // or export default function App()
  const years = [2025, 2026, 2027]
  
  return (
    <>
      <Header title="Mukul Kashyap"/>
      <h1>Hello</h1>
      <h2>Hi</h2>
      <Main />
      <Footer year={years[1]} statement="All rights reserved"/>
    </>
  )
}

export default App
