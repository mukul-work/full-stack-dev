import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import Component1 from './components/component.jsx'

function App() { // or export default function App()

  return (
    <>
      <Header />
      <h1>Hello</h1>
      <h2>Hi</h2>
      <Component1 />
      <Footer />
    </>
  )
}

export default App
