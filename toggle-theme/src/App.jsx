import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    document.documentElement.dataset.theme = mode
  }, [mode])

  const changeMode = () => {
    setMode(prev =>
      prev === 'light' ? 'dark' : 'light'
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Theme Controller</h1>

        <button
          className="theme-toggle"
          onClick={changeMode}
        >
          Switch to {mode === 'light' ? 'Dark' : 'Light'}
        </button>
      </header>

      <main className="content">
        <p className="current">
          Active Theme: {mode}
        </p>
      </main>
    </div>
  )
}

export default App
