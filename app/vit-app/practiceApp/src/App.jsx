import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setUser(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  async function fetchData() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUser(res.data);
    }catch(e){
      console.log(e)
    }
  }
  fetchData();
  return(
    <>
      <div>Fetch Api using Axios</div>
      <ul>
        {user.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default App
