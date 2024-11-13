

import { NextResponse } from "next/server";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const pdfURl="https://brazen-sheep-58.convex.cloud/api/storage/2aba7b3a-5d83-4ff3-95c8-1122a689509a"
export async function GET(req){

    const response =await fetch(pdfURl);
    const data=await response.blob();
    const loader=new PDFLoader(data);
    const docs=await loader.load();

    let pdfTextContent="";
    docs.forEach(docs=>{
        pdfTextContent=pdfTextContent+docs.pageContent;
    })

    //text split

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 10,
        chunkOverlap: 1,
      });
      const output = await splitter.createDocuments([pdfTextContent]);

      let splitterList=[];
      output.forEach(doc=>{
        splitterList.push(docs.pageContent)
      })

    return NextResponse.json({result:output})
}