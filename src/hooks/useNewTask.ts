import { useReducer } from 'react'
import { type Task } from '../types'

interface TaskInputState {
  inputValues: Task
}

type TaskInputReducerAction =
  | {
      type: 'change_value'
      payload: {
        inputName: string
        inputValue: string
      }
    }
  | {
      type: 'clear'
    }

const INITIAL_STATE = {
  id: '',
  text: '',
  datetime: '',
  checked: false
}

const taskInputReducer = (
  state: TaskInputState['inputValues'],
  action: TaskInputReducerAction
) => {
  switch (action.type) {
    case 'change_value':
      // eslint-disable-next-line no-case-declarations
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case 'clear':
      return {
        ...INITIAL_STATE,
        datetime: state.datetime
      }

    default:
      return state
  }
}

const useNewTask = () => {
  return useReducer(taskInputReducer, INITIAL_STATE)
}

export default useNewTask
