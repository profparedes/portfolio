import { memo } from 'react'

import GlobalStyles from 'Styles/GlobalStyles'

import Home from 'pages/Home'

const App: React.FC = () => (
  <>
    <Home />
    <GlobalStyles />
  </>
)

export default memo(App)
