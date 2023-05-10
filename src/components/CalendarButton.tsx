import { useState } from 'react'
import iconWhite from '../assets/icons/calendar-white.svg'
import iconDark from '../assets/icons/calendar-dark.svg'

interface Props {
  datetime?: string
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

type Mode = 'light' | 'dark'

export const CalendarButton = ({ datetime, onChange }: Props) => {
  const [mode, setMode] = useState<Mode>('light')
  const [active, setActive] = useState<boolean>(false)

  const { backgroundColor, srcImg } = {
    light: { backgroundColor: '#D9E0E0', srcImg: iconDark },
    dark: { backgroundColor: '#003233', srcImg: iconWhite }
  }[mode]

  const opacity = active ? 1 : 0.5

  return (
    <div
      className="calendar-box"
      style={{ backgroundColor, opacity }}
      aria-hidden="true"
    >
      <input
        type="datetime-local"
        name="datetime"
        value={datetime}
        className="input-date-button"
        onChange={(evt) => {
          setActive(Boolean(evt.target.value))
          onChange(evt)
        }}
        onMouseOut={() => {
          setMode('light')
        }}
        onMouseOver={() => {
          setMode('dark')
        }}
        onFocus={() => {}}
        onBlur={() => {}}
      />
      <img className="icon" src={srcImg} alt="CircleButton" />
    </div>
  )
}
