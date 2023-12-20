// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  function calcEDV(amount: number, currency: string) {
    return amount * 0.18 + " " + currency
  }


  return (
    <>
<h1>{calcEDV(100,"AZN")}</h1>
    </>
  )
}

export default App
