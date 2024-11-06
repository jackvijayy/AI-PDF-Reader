import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center fixed top-0 w-full left-0 z-50'>
        <Image src="/logop.png" alt='logo' width={150} height={150}/>
        <h1>vijay</h1>

    </div>
  )
}

export default Header