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
      <Header />
      <card>
        <h1>Hello</h1>
        <h2>React App</h2>
      </card>
      <card1>
        <h3>hello</h3>
      </card1>
      <Main />
      <Footer />
    </>
  )
}

export default App
