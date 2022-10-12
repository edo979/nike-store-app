import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { MainNavigation } from './components/MainNavigation'
import './style/style.scss'

function App() {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
