import { useState } from 'react'
import { MainNavigation } from './components/MainNavigation'
import { Home } from './pages/Home'
import './style/style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainNavigation />
      <Home />
    </>
  )
}

export default App
