import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardHome from './pages/Deshboard/DashboardHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DashboardHome/>
    </>
  )
}

export default App
