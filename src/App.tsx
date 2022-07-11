import styled from 'styled-components'

import Achievement from 'pages/Achievement'

const AppWrapper = styled.div`
  display: flex;
`

function App(): JSX.Element {
  return (
    <AppWrapper>
      <Achievement />
    </AppWrapper>
  )
}

export default App
