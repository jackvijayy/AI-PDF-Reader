'use client'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import WorkHeader from '../_components/WorkHeader';
import PdfViewer from '../_components/PdfViewer';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const workspace = () => {

    const { fileId } = useParams();
    const fileInfo=useQuery(api.fileStorage.GetFileRecord,{
        fileId:fileId,
    });
    useEffect(()=>{
        console.log(fileInfo)

    },[fileInfo])

   

    return (
        <div>
            <WorkHeader />
            <div className=' grid grid-cols-2 gap-2'>
                <div>
                    {/* text editor */}

                </div>
                <div>
                    {/* pdf vieer */}
                    <PdfViewer fileUrl={fileInfo?.fileUrl}/>


                </div>
            </div>

        </div>
    )
}

export default workspace