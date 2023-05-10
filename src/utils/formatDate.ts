type Format = 'Monday 29 march - 6:00 pm' | 'Monday 29 march - 18:00'

interface Props {
  datetime?: string
  format: Format
}

const Months = [
  { id: '1', espName: 'enero', engName: 'january' },
  { id: '2', espName: 'febrero', engName: 'february' },
  { id: '3', espName: 'marzo', engName: 'march' },
  { id: '4', espName: 'abril', engName: 'april' },
  { id: '5', espName: 'mayo', engName: 'may' },
  { id: '6', espName: 'junio', engName: 'june' },
  { id: '7', espName: 'julio', engName: 'july' },
  { id: '8', espName: 'agosto', engName: 'august' },
  { id: '9', espName: 'setiembre', engName: 'september' },
  { id: '10', espName: 'octubre', engName: 'october' },
  { id: '11', espName: 'noviembre', engName: 'november' },
  { id: '12', espName: 'diciembre', engName: 'december' }
]

const Days = [
  { espName: 'Domingo', engName: 'Sunday' },
  { espName: 'Lunes', engName: 'Monday' },
  { espName: 'Martes', engName: 'Tuesday' },
  { espName: 'Miercoles', engName: 'Wednesday' },
  { espName: 'Jueves', engName: 'Thursday' },
  { espName: 'Viernes', engName: 'Friday' },
  { espName: 'Sábado', engName: 'Saturday' }
]

const cerosAdd = (number: number, length: number) => {
  const numberStr = number.toString()
  const nCeros = length - numberStr.length
  return nCeros > 0 ? '0'.repeat(nCeros) + numberStr : numberStr
}

export const formatDate = ({ datetime, format }: Props) => {
  if (datetime === null || datetime === undefined || datetime === '') return ''

  const date = new Date(datetime)
  const YYYY = date.getFullYear()
  const MM = date.getMonth() + 1
  const DD = date.getDate()
  const Day = date.getDay()
  const HH = date.getHours()
  const mm = date.getMinutes()
  console.log({ YYYY, MM, DD, HH, mm })

  if (format === 'Monday 29 march - 18:00') {
    return `${Days[Day].engName} ${DD} ${Months[MM - 1].engName} - ${cerosAdd(
      HH,
      2
    )}:${cerosAdd(mm, 2)}`
  }

  return datetime
}
