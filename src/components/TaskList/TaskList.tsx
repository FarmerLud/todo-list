// import React from 'react'
import checkIconDark from '../../assets/icons/check-dark.svg'
import trashIconDark from '../../assets/icons/trash-dark.svg'

interface Props {
  tasks: Array<{
    id: string
    text: string
    datetime?: string
  }>
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <ul className="tasks-box">
      <h2 className="groupTitle">TODAY</h2>
      {tasks.map(({ id, text, datetime }) => (
        <li key={id} className="card">
          <div className="side-left">
            <p className="text">{text}</p>
            <span className="datetime">{datetime}</span>
          </div>
          <div className="box-icon">
            <img className="icon" src={checkIconDark} alt="checkButton" />
          </div>
          <div className="box-icon">
            <img className="icon" src={trashIconDark} alt="trashButton" />
          </div>
        </li>
      ))}
    </ul>
  )
}
