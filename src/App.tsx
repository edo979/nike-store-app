import { Outlet } from 'react-router-dom'
import { MainNavigation } from './components/MainNavigation'
import './style/style.scss'

function App() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
}

export default App
