
import { Button } from '@/components/ui/button'
import { Layout, Shield } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
   <div className='shadow-md h-screen p-7 '>
    <Image src="/logop.png" alt="logo" width={150} height={100}/>
    <div className='mt-10'>
        <Button className="w-full"> upload pdf</Button>

        <div className='flex items-center  gap-3 p-3 mt-10 hover:bg-slate-100 rounded-lg cursor-pointer'>
            <Layout/>
            <h2>workspace</h2>
        </div>
        <div className='flex items-center  gap-3 p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer'>
            <Shield/>
            <h2>Upgrade</h2>
        </div>

    </div>

   </div>
  )
}

export default Sidebar