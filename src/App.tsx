/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import './App.css'
import { TaskList } from './components/TaskList/TaskList'

interface Task {
  id: string
  text: string
  datetime?: string
}

interface AppState {
  tasks: Task[]
}

const INITIAL_STATE = [
  {
    id: '1',
    text: 'Esta es una tarea'
    // datetime: ''
  },
  {
    id: '2',
    text: 'Segunda tarea del día',
    datetime: '2023-04-30 10:00:00'
  }
]

function App() {
  const [tasks, setTasks] = useState<AppState['tasks']>([])

  useEffect(() => {
    setTasks(INITIAL_STATE)
  }, [])

  return (
    <section>
      <div>English</div>
      <h1 className="title">YOU CAN DO IT !</h1>
      <TaskList tasks={tasks} />
    </section>
  )
}

export default App
