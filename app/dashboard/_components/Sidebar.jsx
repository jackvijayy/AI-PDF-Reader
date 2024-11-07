import { Button } from "@/components/ui/button";
import { Layout, Shield } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress"
import React from "react";
import UploadPdfDialog from "./UploadPdfDialog";

const Sidebar = () => {
  return (
   <div className="shadow-md h-screen p-7 max-md:hidden">
    <Image src="/logop.png" alt="logo" width={170} height={120}/>
    <div className="mt-10">
      
      <UploadPdfDialog>
      <Button>Upload Pdf</Button>

      </UploadPdfDialog>
      <div className="flex gap-2 items-center p-3 mt-5 hover:bg-slate-300">
        <Layout/>
        <h2>Workspace</h2>

      </div>

      <div className="flex gap-2 items-center p-3 mt-5 hover:bg-slate-300">
        <Shield/>
        <h2>upgrade</h2>

      </div>

    </div>
    <div className="absolute bottom-2 w-[80%]">
      <Progress value={30}/>
      <p className="text-sm mt-1">2 out of 5 pdf</p>
      <p className="text-xs text-gray-400 mt-2"> upgrade for more uploads</p>
    </div>
   </div>
  );
};

export default Sidebar;
