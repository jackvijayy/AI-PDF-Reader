import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
  

const UploadPdfDialog = ({children}) => {
  return (
    <Dialog>
    <DialogTrigger>
        {children}
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Upload Pdf File</DialogTitle>
        <DialogDescription asCChild>
            <div className=''>
            <h2>select a files to upload</h2>
                <div className=' mt-15 gap-2 p-3 rounded-md border'>
                    <input type="file" accept='application/pdf' />
                </div>
                <div className='mt-2 '> 
                    <label htmlFor="">File Name *</label>               
                    <Input placeholder="File name"/>
                </div>
            </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:justify-end max-md:gap-3">
          <DialogClose asChild>
            <Button type="button" className="bg-red-600">
              Close
            </Button>
          </DialogClose>
          <Button>Upload</Button>
        </DialogFooter>
    </DialogContent>

  </Dialog>
  )
}

export default UploadPdfDialog