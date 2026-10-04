import { useContext } from "react"
import { Countercon } from "../App.jsx"

function Counter() {

    const { count, setCount } = useContext(Countercon)

    return (
        <>
            <h1>Counter value is : {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Inc
            </button>

            <button onClick={() => setCount(count - 1)}>
                Dec
            </button>
        </>
    )
}

export default Counter