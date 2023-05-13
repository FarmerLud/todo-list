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

type Group =
  | 'PAST'
  | 'NO_DATE'
  | 'TODAY'
  | 'TOMORROW'
  | 'THIS_WEEK'
  | 'NEXT_WEEK'
  | 'FUTURE'

type Groups = Record<Group, Task[]>

export const TaskList = ({ tasks, onDeleteTask, onCheckTask }: Props) => {
  const TaskCard = ({ id, text, datetime, checked }: Task) => {
    return (
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
    )
  }

  const TasksGroup = (group: Group, tasks: Task[]) => {
    return (
      <>
        <h2 className="groupTitle">{group.split('_').join(' ')}</h2>
        {tasks.map((task) => TaskCard(task))}
      </>
    )
  }

  const renderList = () => {
    const groups: Groups = {
      PAST: [],
      NO_DATE: [],
      TODAY: [],
      TOMORROW: [],
      THIS_WEEK: [],
      NEXT_WEEK: [],
      FUTURE: []
    }

    const orderTasks = tasks.sort((a, b) => {
      const timeA = new Date(a.datetime ?? 0).getTime()
      const timeB = new Date(b.datetime ?? 0).getTime()
      return timeA - timeB
    })
    orderTasks.forEach((task) => {
      const { datetime } = task
      if (!datetime) return groups.NO_DATE.push(task)
      const now = new Date()
      const time = new Date(datetime).getTime()
      if (now.getTime() > time) return groups.PAST.push(task)
      const timeOneDay = 24 * 60 * 60 * 1000
      const timeTodayEnd =
        new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() +
        timeOneDay
      if (time < timeTodayEnd) return groups.TODAY.push(task)
      const timeTomorrowEnd = timeTodayEnd + timeOneDay
      if (time < timeTomorrowEnd) return groups.TOMORROW.push(task)
      const nowDayOfWeek = now.getDay() === 0 ? 7 : now.getDay()
      const nDaysToWeekEnd = 7 - nowDayOfWeek
      const timeWeekEnd = timeTodayEnd + nDaysToWeekEnd * timeOneDay
      if (time < timeWeekEnd) return groups.THIS_WEEK.push(task)
      const timeNextWeekEnd = timeTodayEnd + (nDaysToWeekEnd + 7) * timeOneDay
      if (time < timeNextWeekEnd) return groups.NEXT_WEEK.push(task)
      return groups.FUTURE.push(task)
    })

    const groupsOrder: Group[] = [
      'PAST',
      'NO_DATE',
      'TODAY',
      'TOMORROW',
      'THIS_WEEK',
      'NEXT_WEEK',
      'FUTURE'
    ]
    return groupsOrder
      .filter((group) => groups[group].length > 0)
      .map((group) => TasksGroup(group, groups[group]))
  }

  return <ul className="tasks-box">{renderList()}</ul>
}
