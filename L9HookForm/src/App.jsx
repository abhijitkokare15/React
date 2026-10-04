import { useState } from 'react'

function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [password, setPass] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    console.log(name)
    console.log(age)
    console.log(password)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />

          <button type="submit">Submit</button>

        </div>

      </form>
    </>
  )
}

export default App