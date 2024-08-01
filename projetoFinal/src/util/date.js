import dayjs from 'dayjs'

export default function getDates(daysNum) {
  const today = dayjs()
  const dates = []
  for (let i = 0; i < daysNum; i++) {
    const dia = today.subtract(i, 'd').format('DD/MM')
    dates.push(dia)
  }
  return dates
}
