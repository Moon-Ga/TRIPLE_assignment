/* eslint-disable no-console */
import { useEffect, useRef } from 'react'

interface Props {
  start: number
  end: number
  duration: number
}
function CountUp({ start, end, duration }: Props): JSX.Element {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const frameDuration = 1000 / 60

    const easeOutExpo = (t: number): number =>
      t === 1 ? 1 : 1 - Math.pow(3, -7 * t)

    let frame = start
    const totalFrames = Math.round((duration * 1000) / frameDuration)
    console.log(totalFrames)
    const counter = setInterval(() => {
      frame += 1
      const progress = easeOutExpo(frame / totalFrames)
      if (ref.current) {
        ref.current.innerText = Math.floor(progress * end).toString()
      }

      if (progress === 1) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [duration, end, start])

  return <span ref={ref}>{start}</span>
}

export default CountUp
