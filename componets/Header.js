import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between fixed z-50 w-full px-6 py-4 lg:px-10 bg-dark-1 text-black'>
      <Link href='/dashboard'>
      <Image src='/logop.png' alt='logo' width={130} height={100}/>
      </Link>

    </div>
  )
}

export default Header