import { type Task } from '../types'
import useNewTask from '../hooks/useNewTask'
import { CalendarButton } from './CalendarButton'
import { formatDate } from '../utils/formatDate'

interface Props {
  onNewTask: (newTask: Task) => void
}

export const TaskInput = ({ onNewTask }: Props) => {
  const [inputValues, dispatch] = useNewTask() // este es un useReducer

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    console.log({ target: evt.target, currentTarget: evt.currentTarget })
    evt.preventDefault()
    onNewTask(inputValues)
    dispatch({ type: 'clear' })
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }

  const { text, datetime } = inputValues
  const to = datetime ? 'to' : ''

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <p className="datetime-info">
            {to} {formatDate({ datetime, format: 'Monday 29 march - 18:00' })}
          </p>
          <input
            onChange={handleChange}
            className="input"
            value={text}
            type="text"
            name="text"
            placeholder="What do you want to do?"
            required
          />
          <CalendarButton datetime={datetime} onChange={handleChange} />
        </div>
        <button className="button">Come On!</button>
      </form>
    </section>
  )
}
