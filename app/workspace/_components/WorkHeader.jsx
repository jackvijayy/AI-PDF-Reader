import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const WorkHeader = () => {
  return (
    <div className='p-4 flex justify-between shadow-md'>
        <Image src={'/logop.png'} alt='logo' width={140} height={140}/>
        <UserButton/>
    </div>
  )
}

export default WorkHeader