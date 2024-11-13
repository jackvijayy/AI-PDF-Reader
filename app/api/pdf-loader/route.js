import { NextResponse } from "next/server";
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";


const pdfURl="https://brazen-sheep-58.convex.cloud/api/storage/2aba7b3a-5d83-4ff3-95c8-1122a689509a"
export async function GET(req){

    const response =await fetch(pdfURl);
    const data=await response.blob()
    const loader=new WebPDFLoader(data);
    const docs=await loader.load();

    return NextResponse.json({result:"hello"})
}