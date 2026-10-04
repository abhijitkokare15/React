import { useContext } from 'react'
import { Countercon } from '../App.jsx'

function Display() {
  const { count } = useContext(Countercon)

  return <h1>I am the displaying count: {count}</h1>
}

export default Display