import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskText, setTaskText] = useState('')

  const createTask = () => {
    if (!taskText.trim()) return

    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: Date.now(),
        label: taskText,
        done: false
      }
    ])

    setTaskText('')
  }

  const switchStatus = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, done: !task.done }
          : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== taskId)
    )
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      createTask()
    }
  }

  return (
    <div className="todo-container">
      <h1>Task Manager</h1>

      <div className="input-section">
        <input
          type="text"
          className="todo-input"
          placeholder="Type a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button className="add-btn" onClick={createTask}>+</button>
      </div>

      <ul className="todo-list">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`todo-item ${task.done ? 'completed' : ''}`}
          >
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={task.done}
              onChange={() => switchStatus(task.id)}
            />

            <span className="todo-text">{task.label}</span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
