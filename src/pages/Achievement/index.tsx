import styled from 'styled-components'

import Original from './Original'
import Refactored from './Refactored'

const AchievementWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  min-width: 1200px;
`

function Achievement(): JSX.Element {
  return (
    <AchievementWrapper>
      <Original />
      <Refactored />
    </AchievementWrapper>
  )
}

export default Achievement
