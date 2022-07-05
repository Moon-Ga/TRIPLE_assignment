import styled from 'styled-components'

import Achievement from './components/Achievement'

const AppWrapper = styled.div`
  display: flex;
  min-width: 1200px;
`

function App(): JSX.Element {
  return (
    <AppWrapper>
      <Achievement />
    </AppWrapper>
  )
}

export default App
