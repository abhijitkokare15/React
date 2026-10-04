import { useState } from 'react'
import Product from './product.jsx'

function Body() {
  const [items] = useState([
    { id: 1, name: 'Milk', price: 100 },
    { id: 2, name: 'Protein', price: 10000 },
    { id: 3, name: 'Almond', price: 200 },
    { id: 4, name: 'Coconut', price: 10 },
    { id: 5, name: 'Amul ghee', price: 200 },
  ])

  return (
    <>
      <h1>I am the Blinkit Body</h1>
      <div>
        {items.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default Body