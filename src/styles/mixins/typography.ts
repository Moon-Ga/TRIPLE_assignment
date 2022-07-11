import { css } from 'styled-components'

export const textStyle = (
  fontSize: number,
  lineHeight?: number,
  letterSpacing?: number,
  fontWeight?: string,
  fontFamily = 'sans-serif',
) => css`
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  font-weight: ${fontWeight};
  font-family: ${fontFamily};
  letter-spacing: ${letterSpacing}px;
`
