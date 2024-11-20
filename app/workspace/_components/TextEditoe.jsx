import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import EditorExtension from "./EditorExtension";


const TextEditoe = () => {
  const editor = useEditor({
    extensions: [StarterKit,
        Placeholder.configure({
            
            placeholder: 'Write something'
        })
    ],
    content: "",
    editorProps:{
        attributes:{
            class:'focus:outline-none h-screen p-5'
        }
    }
  });
  return (
    <div>
        <EditorExtension editor={editor}/>
      <div>
        <EditorContent editor={editor} />
    </div>
    </div>
  );
};

export default TextEditoe;
