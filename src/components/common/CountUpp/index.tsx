/* eslint-disable no-console */
import { useEffect, useRef } from 'react'

interface Props {
  start: number
  end: number
  duration: number
}
function CountUpp({ start, end, duration }: Props): JSX.Element {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const perMilli = (end - start) / (100 * duration)

    const easeOutExpo = (t: number): number =>
      t === 1 ? 1 : 1 - Math.pow(3, -7 * t)

    let current = start

    let timer = 0
    setTimeout(() => {
      timer += 5
      console.log(timer, 'timer')
    }, 5000)
    const counter = setInterval(() => {
      current += perMilli
      const progress = easeOutExpo((current - start) / (end - start))
      console.log(current, 'current')
      console.log(progress, 'progress')
      console.log(current * progress, 'current * progress')
      if (ref.current) {
        ref.current.innerText = Math.round(current * progress).toString()
      }

      if (Math.floor(current) === end) {
        clearInterval(counter)
      }
    }, 10)

    return () => clearInterval(counter)
  }, [duration, end, start])

  return <span ref={ref}>{start}</span>
}

export default CountUpp
