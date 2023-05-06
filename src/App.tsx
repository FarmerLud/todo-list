import { useState } from 'react'
import './App.css'
import Task from './components/Task/Task'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      text: 'Esta es una tarea',
      datetime: ''
    },
    {
      id: '2',
      text: 'Segunda tarea del día',
      datetime: '2023-04-30 10:00:00'
    },
  ])

  return (
    <section>
      <div>English</div>
      <h1 className='title'>YOU CAN DO IT !</h1>
      <ul className='tasks-box'>
        <h2 className='groupTitle'>TODAY</h2>
        {
          tasks.map((task,i) => {
            return (
              <Task key={i} task={task}></Task>
            )
          })
        }
      </ul>
    </section>
  )
}

export default App
