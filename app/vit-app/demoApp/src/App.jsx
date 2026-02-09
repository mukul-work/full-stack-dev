import './App.css'
import UserCard from './UserCard.jsx'
import Wrapper from './Wrapper.jsx'

function App() {
  const users = [
    {
      name: "Virat Kohli",
      role: "Batsman",
      country: "India"
    },
    {
      name: "Ms. Dhoni",
      role: "Batsman",
      country: "India"
    }
  ]

  return (
    <>
    <div>
      <h1>Users Dashboard</h1>
      <Wrapper title = "User Lists">
        {
          users.map((use, index) => <UserCard key={index} user={use} />)
        }
      </Wrapper>
    </div>
    </>
  )
}

export default App
