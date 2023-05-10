/* eslint-disable react/react-in-jsx-scope */
// import { useState } from 'react'
import './App.css'
import { TaskList } from './components/TaskList'
import { TaskInput } from './components/TaskInput'
import { type Task } from './types'
import { useLocalStorage } from './hooks/useLocalStorage'

interface AppState {
  tasks: Task[]
}

function App() {
  const { storedValue: tasks, setValue: setTasks } = useLocalStorage<
    AppState['tasks']
  >('tasks', [])

  const handleNewTask = (newTask: Task) => {
    setTasks([
      ...tasks,
      { ...newTask, id: Date.now().toString(), checked: false }
    ])
  }

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleCheckTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, checked: !task.checked }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <section className="app">
      {/* <div>English</div> */}
      <h1 className="title">YOU CAN DO IT !</h1>
      <TaskInput onNewTask={handleNewTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCheckTask={handleCheckTask}
      />
    </section>
  )
}

export default App
