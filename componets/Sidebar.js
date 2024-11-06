
import { Button } from '@/components/ui/button'
import { Layout, Shield } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='sticky left-0  bg-pink-200 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28  lg:w-[264px]'>
            
            <Button className="mb-10">vijay</Button>
            <div className='flex flex-col gap-20 mt-70'>
                <div className='flex '>
                    <Layout/>
                    <h2>Worksapce</h2>

                </div>
                <div className='flex  '>
                    <Shield/>
                    <h2>upgarde</h2>

                    
                </div>
            </div>


        </div>
    )
}

export default Sidebar