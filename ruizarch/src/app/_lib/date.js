import { parseISO, format, isValid } from 'date-fns'

export default function Date({ dateString }) {
  if (!dateString) {
    return <time>Invalid date</time>
  }
  const date = parseISO(dateString)
  if (!isValid(date)) {
    return <time>Invalid date</time>
  }
  return <time dateTime={dateString}>{format(date, 'dd.MM.yyyy')}</time>
}
