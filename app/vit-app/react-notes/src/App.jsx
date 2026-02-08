import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./pages/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
