import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Path from './Routes/Path'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-md '>
      <Path/>
    </div>
  )
}

export default App
