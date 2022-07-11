import { css, FlattenSimpleInterpolation } from 'styled-components'

export const textStyle = (
  fontSize: number,
  lineHeight?: number,
  letterSpacing?: number,
  fontWeight?: string,
  fontFamily = 'sans-serif',
): FlattenSimpleInterpolation => css`
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  font-weight: ${fontWeight};
  font-family: ${fontFamily};
  letter-spacing: ${letterSpacing}px;
`
