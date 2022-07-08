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
    const ticktime = 15
    const count = (end - start) / (1000 * (1 / ticktime))
    const interval = ticktime * duration

    const easeOutExpo = (t: number): number =>
      t === 1 ? 1 : 1 - Math.pow(3, -7 * t)

    let current = start
    let timer = 0
    setTimeout(() => {
      timer += 2
      console.log(timer, 'timer')
    }, 2000)
    const counter = setInterval(() => {
      current += count
      const progress = easeOutExpo(current / end)
      if (ref.current) {
        ref.current.innerText =
          Math.floor(current) >= end
            ? end.toString()
            : Math.floor(progress * end).toString()
      }

      if (Math.floor(current) >= end) {
        clearInterval(counter)
      }
    }, interval)

    return () => clearInterval(counter)
  }, [duration, end, start])

  return <span ref={ref}>{start}</span>
}

export default CountUpp
