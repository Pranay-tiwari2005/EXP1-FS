import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='div'>
      <h1>Count SPA</h1>
      <p>Count: <span className="count-number">{count}</span></p>
      <button onClick={() => setCount((count) => count + 1)}> +1 </button>
      <button onClick={() => setCount((count) => count - 1)}> -1 </button>
      </div>
    </>
  )
}

export default App