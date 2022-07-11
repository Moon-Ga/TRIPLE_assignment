import styled, { css, Keyframes, keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
  `

interface AnimationsObject {
  fadeInUp: Keyframes
}
const animations: AnimationsObject = { fadeInUp }

interface AnimationProps {
  readonly type: keyof AnimationsObject
  readonly duration: number
  readonly delay?: number
}
export const AnimationWrapper = styled.div<AnimationProps>`
  ${(props) =>
    css`
      animation: ${animations[props.type]} ${props.duration}s ease-in-out;
      animation-delay: ${props.delay}s;
    `}
`
