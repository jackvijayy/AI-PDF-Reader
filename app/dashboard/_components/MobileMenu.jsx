import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import {  Layout, Menu, Shield } from 'lucide-react'
import Image from 'next/image'


const MobileMenu = () => {
  return (
    <Sheet>
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle><Image src="/logop.png" alt='logo' width={100} height={100}/></SheetTitle>
      <SheetDescription>

      <div className="flex gap-2 items-center p-3 mt-5 hover:bg-slate-300">
        <Layout/>
        <h2>Workspace</h2>

      </div>

      <div className="flex gap-2 items-center p-3 mt-5 hover:bg-slate-300">
        <Shield/>
        <h2>upgrade</h2>

      </div>
       
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default MobileMenu