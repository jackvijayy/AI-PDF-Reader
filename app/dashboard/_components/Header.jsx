
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <div className='flex justify-between p-3 sm:p-8 lg:p-8 lg:flex-end'>
      <div className='md:hidden'>
        <MobileMenu/>
      </div>
      <div className=''>
      <UserButton/>
      </div>

      

   

    </div>
  )
}

export default Header