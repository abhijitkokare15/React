import React from 'react'

const Sumcal = React.memo(({ number }) => {

  const calculatesum = () => {
    let sum = 0

    for (let i = 0; i <= number; i++) {
      sum += i
    }

    return sum
  }

  const total = calculatesum()
  console.log("this is sum")

  return (
    <>
      <h1>This is our math library</h1>
      <h2>Sum: {total}</h2>
    </>
  )
})

export default Sumcal