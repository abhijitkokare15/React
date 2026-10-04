import './App.css'
import { createContext, useState } from 'react'
import Header from './Components/header.jsx'
import Body from './Components/body.jsx'
import Footer from './Components/fotter.jsx'

// export const Countercon = createContext()
export const ProductContext = createContext()

function App() {
  //const [count, setCount] = useState(0)
  const [cartItem, setCartItem] = useState(0)

  return (
    // <Countercon.Provider value={{ count, setCount }}>
      <ProductContext.Provider value={{ cartItem, setCartItem }}>
        <Header />
        <Body />
        <Footer />
      </ProductContext.Provider>
    // </Countercon.Provider>
  )
}

export default App