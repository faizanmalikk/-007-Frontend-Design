import React from 'react'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

const App = () => {


  return (
    <div className=''>

      <div className='flex '>

        <Sidebar />

        <div className='md:ml-[269px] w-full'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>

      </div>

    </div>
  )
}

export default App