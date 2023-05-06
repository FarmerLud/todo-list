import './Task.css'
import checkIconDark from '../../assets/icons/check-dark.svg'
import trashIconDark from '../../assets/icons/trash-dark.svg'

interface Task {
  id: string
  text: string
  datetime: string
}

export const TaskCard = ({ id, text, datetime }: Task) => {
  return (
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
  )
}
