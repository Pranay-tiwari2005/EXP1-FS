import { useState } from 'react'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState({
    fullName: '',
    userEmail: ''
  })
  const [result, setResult] = useState(null)

  const submitForm = (event) => {
    event.preventDefault()
    setResult(userInput)
  }

  const updateField = (e) => {
    const { name, value } = e.target
    setUserInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <h1>Basic Form Application</h1>

      <form onSubmit={submitForm}>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your name"
          value={userInput.fullName}
          onChange={updateField}
        />

        <input
          type="email"
          name="userEmail"
          placeholder="Enter your email"
          value={userInput.userEmail}
          onChange={updateField}
        />

        <button type="submit">Send</button>
      </form>

      {result && (
        <div>
          <h2>Form Details</h2>
          <p>Name: {result.fullName}</p>
          <p>Email: {result.userEmail}</p>
        </div>
      )}
    </>
  )
}

export default App
