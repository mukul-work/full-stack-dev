import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./pages/Home"

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
