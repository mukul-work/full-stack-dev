import './App.css'
import Header from './Components/Header';
import {useState} from 'react';
function App() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 56000,
      image: "https://imgs.search.brave.com/va1nVoHDIy3DJJ8wEkyKBacQBAcJ4K_2QvFhy0UsBcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/OTEtaW1nLmNvbS9w/aWN0dXJlcy9sYXB0/b3BzL2RlbGwvZGVs/bC1sYXRpdHVkZS0x/NS0zNTQwLWluZGxh/dGkzNTQwbjEtMi1s/YXB0b3AtZ2ItZ2It/Z2Itc3NkLW1iLTE3/MzExNS12MS1vcmln/aW5hbC0yLmpwZz90/cj1oLTE4MCxjLWF0/X21heCxxLTcwLHQt/dHJ1ZQ"
    },
    {
      id: 2,
      name: "Mobile",
      price: 12000,
      image: "https://imgs.search.brave.com/LbyLLQRlEGK5iQNYugD_RprW588LoZCHqiNYUw8rNzU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnNtYXJ0cHJpeC5j/b20vcngtaXZDSlcz/YmNlLXcyODAtaDI4/MC94aWFvbWktcmVk/bWktbm90ZS0xMy53/ZWJw"
    },
    {
      id: 3,
      name: "Charger",
      price: 1000,
      image: "https://imgs.search.brave.com/ommwQeYNCngBZgBCFtIB8rxgqRfJ0lQt8wnDXiWYap0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFUdUU1SFZGZUwu/anBn"
    }
  ];
  return (
    <>
      <Header cartCount={cart.length}/>
    </>
  )
}

export default App
