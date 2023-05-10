// import React from 'react'
import checkIconDark from '../assets/icons/check-dark.svg'
import checkIconWhite from '../assets/icons/check-white.svg'
import trashIconDark from '../assets/icons/trash-dark.svg'
import trashIconWhite from '../assets/icons/trash-white.svg'
import { type Task } from '../types'
import { formatDate } from '../utils/formatDate'
import { CircleButton } from './CircleButton'

interface Props {
  tasks: Task[]
  onDeleteTask: (id: string) => void
  onCheckTask: (id: string) => void
}

export const TaskList = ({ tasks, onDeleteTask, onCheckTask }: Props) => {
  const renderList = () => {
    return tasks.map(({ id, text, datetime, checked }) => (
      <li key={id} className="card" data-checked={Boolean(checked)}>
        <div className="side-left">
          <p className="text" data-checked={Boolean(checked)}>
            {text}
          </p>
          <span className="datetime">
            {formatDate({ datetime, format: 'Monday 29 march - 18:00' })}
          </span>
        </div>
        <CircleButton
          src={checkIconDark}
          srcOver={checkIconWhite}
          onClick={() => {
            onCheckTask(id)
          }}
        />
        <CircleButton
          src={trashIconDark}
          srcOver={trashIconWhite}
          onClick={() => {
            onDeleteTask(id)
          }}
        />
      </li>
    ))
  }

  return (
    <ul className="tasks-box">
      <h2 className="groupTitle">TODAY</h2>
      {renderList()}
    </ul>
  )
}
