import { useState } from 'react'

interface Props {
  src: string
  srcOver?: string
  active?: boolean
  onClick: () => void
}

type Mode = 'light' | 'dark'

export const CircleButton = ({
  src,
  srcOver,
  active = true,
  onClick
}: Props) => {
  const [mode, setMode] = useState<Mode>('light')

  const { backgroundColor, srcImg } = {
    light: { backgroundColor: '#D9E0E0', srcImg: src },
    dark: { backgroundColor: '#003233', srcImg: srcOver }
  }[mode]

  const opacity = active ? 1 : 0.5

  return (
    <div
      className="box-icon fsh0"
      style={{ backgroundColor, opacity }}
      onClick={onClick}
      onMouseOut={() => {
        if (srcOver === null || onClick === null) return
        setMode('light')
      }}
      onMouseOver={() => {
        if (srcOver === null || onClick === null) return
        setMode('dark')
      }}
      onFocus={() => {}}
      onBlur={() => {}}
      aria-hidden="true"
    >
      <img className="icon" src={srcImg} alt="CircleButton" />
    </div>
  )
}
