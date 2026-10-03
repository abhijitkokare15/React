import { useState, useRef } from 'react'

function App() {

  const [time, setTime] = useState(0)

  const intervalref = useRef(null)

  function handledStart() {

    // Don't create another interval if already running
    if (intervalref.current !== null) 
        return

    intervalref.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }

  function handledStop() {
    clearInterval(intervalref.current)
    intervalref.current = null
  }

  function handledReset() {
    clearInterval(intervalref.current)
    intervalref.current = null
     setTime(0)
  }

  return (
    <>
      <h1>StopWatch: {time}</h1>

      <button onClick={handledStart}>
        Start
      </button>

      <br /><br />

      <button onClick={handledStop}>
        Stop
      </button>

      <br /><br />

      <button onClick={handledReset}>
        Reset
      </button>
    </>
  )
}

export default App