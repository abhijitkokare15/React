import { useState, useEffect } from 'react';
import './App.css';

function App() {
  //re render the function 
  const [users, setUsers] = useState([]);
  // const  [name,setName] =useState("")
  const [count,setCount] = useState(30)

  async function githubprofile() {
    const res = await fetch("https://api.github.com/users?per_page="+count);
    const data = await res.json();
    //console.log("pavan")
    setUsers(data);

  }

    // function handled_change(e)
    // {
    //     //console.log(e.target.value)
    //     setName(e.target.value.toUpperCase())
        
    // }
// executev  the code at last i.e complete the your side work
// first and then run this code 
  useEffect(() => {
    githubprofile();
  }, [count]);
  // [] =>? depenency array  

 //  githubprofile();
   
  return (
    <>
      <h1>Github Users</h1>
      
      <input type='number' value ={count} onChange={(e)=>setCount(e.target.value)} />
      <div>
        {users.map((user) => (
          <img
            key={user.id}
            src={user.avatar_url}
            height={"100px"}
            width="100px"
            alt={user.login}
          />
        ))}
      </div>
    </>
  );
}

export default App;