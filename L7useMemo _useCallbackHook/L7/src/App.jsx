import { useState, useCallback, useMemo } from 'react'
import Sumcal from './sum.jsx'
import Post from './Post.jsx'

function App() {
  const [count, setCount] = useState(0)

  console.log("App rendered")

  // useCallback → remembers a FUNCTION
  const handledClick = useCallback(() => {
    console.log("Namaste Duniya", count)
  }, [count])

  // useMemo → remembers a VALUE
  const total = useMemo(() => {
    console.log("Calculating sum...")

    let sum = 0

    for (let i = 0; i <= count; i++) {
      sum += i
    }

    return sum
  }, [count])


  const obj = useMemo(() => {
    return { name: "Nagato", age: 19 }
  }, [])

  return (
    <>
      <h1>Counter</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 2)}>
        Increment
      </button>

      <br />
      <br />

      <button onClick={() => setCount(count - 2)}>
        Decrement
      </button>

      <br />
      <br />

      <button onClick={handledClick}>
        Click
      </button>

      <h2>Sum: {total}</h2>

      <Sumcal number={1000} onClick={handledClick} />
      <Post value={obj}/>
    </>
  )
}

export default App