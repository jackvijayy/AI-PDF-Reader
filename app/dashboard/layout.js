import Header from '@/componets/Header'
import Sidebar from '@/componets/Sidebar'

import React from 'react'

const DashBoardLayout = ({ children }) => {
  return (
    <div>
        <div className='md:w-68 h-screen fixed'>
            <Sidebar/>
        </div>
        <div className='ml-64'>
            {children}
        </div>
    </div>
  )
}

export default DashBoardLayout