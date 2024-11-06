

import Header from '@/componets/Header'
import Sidebar from '@/componets/Sidebar'
import React from 'react'

const DashBoardLayout = ({ children }) => {
  return (
    
     <main className="relative">
       <Header/>
        <div className="flex">
            <Sidebar/>
            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                <div>
                    {children}
                </div>

            </section>
        </div>   
    </main>
 


  )
}

export default DashBoardLayout