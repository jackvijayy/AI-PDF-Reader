"use client";
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2Icon } from "lucide-react";
import { useUser } from '@clerk/nextjs';
import axios, { Axios } from 'axios';

const UploadPdfDialog = ({ children }) => {
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
  const AddFileEntry=useMutation(api.fileStorage.AddFileEntryToDb);
  const getFileUrl=useMutation(api.fileStorage.getFileUrl);
  const embeddDocument=useAction(api.myAction.ingest)
  const {user}=useUser();
  const [file, setFile] = useState();
  const [fileName,setFileName]=useState();
  const[open,setOpen]=useState(false);

  const [loading, setLoading] = useState(false);

  const onFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const onUpload = async () => {
    setLoading(true);
    // Step 1: Get a short-lived upload URL
    const postUrl = await generateUploadUrl();

    // Step 2: POST the file to the URL
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();
    const fileId=uuidv4();
    const fileUrl= await getFileUrl({storageId:storageId})


    const resp=await AddFileEntry({
      fileId:fileId,
      storageId:storageId,
      fileName:fileName ?? "Untitled File",
      fileUrl:fileUrl,
      createdBy:user?.primaryEmailAddress?.emailAddress
    })
    // console.log(resp);

    // api call to fetch from pdf process data

    const ApiResp=await axios.get('/api/pdf-loader?pdfUrl='+fileUrl);
    console.log(ApiResp.data.result);
     await embeddDocument({
      splitText:ApiResp.data.result,
      fileId:fileId,
    })
    // console.log(embeddedResult)
    
    setLoading(false);
    setOpen(false);
  };


  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={()=>setOpen(true)} className="w-full">+ Upload PDF files</Button>
        </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Pdf File</DialogTitle>
          <DialogDescription asCChild>
            <div className="">
              <h2>select a files to upload</h2>
              <div className=" mt-15 gap-2 p-3 rounded-md border">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(event) => onFileSelect(event)}
                />
              </div>
              <div className="mt-2 ">
                <label htmlFor="">File Name *</label>
                <Input placeholder="File name"  onChange={(e)=>setFileName(e.target.value)}/>
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
          <Button onClick={onUpload} disabled={loading}>
            {loading ? <Loader2Icon className="animate-spin" /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPdfDialog;
