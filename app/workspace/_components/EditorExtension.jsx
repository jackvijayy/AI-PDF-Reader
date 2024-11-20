import { FontFamilyIcon, ListBulletIcon } from '@radix-ui/react-icons'
import { BlocksIcon, Bold, Code, FlipHorizontal, Heading, Heading1, Heading2, Highlighter, Italic, Strikethrough, Subscript, Superscript, Underline } from 'lucide-react'


const EditorExtension = ({editor}) => {
 
  return (
    <div className='p-5'>
        <div className="control-group">
        <div className="button-group flex justify-between">

          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            //  className={editor.isActive('bold') ? 'text-blue-500' : ''}  
            >
            <Bold/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
          
            >
            <Italic/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            // className={editor.isActive('code') ? 'text-blue-500' : ''}
          >
            <Code/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            // className={editor.isActive('highlight') ? 'text-blue-500' : ''}
          >
            <Highlighter/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            // className={editor.isActive('strike') ? 'is-active' : ''}
          >
            <Strikethrough/>
          </button>

          {/* <button
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            className={editor.isActive('subscript') ? 'text-blue-600' : ''}
          >
            <Subscript/>
          </button> */}

          <button
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            // className={editor.isActive('superscript') ? 'is-active' : ''}
          >
            <Superscript/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            // className={editor.isActive('underline') ? 'is-active' : ''}
          >
           <Underline/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            // className={editor.isActive('blockquote') ? 'is-active' : ''}
          >
            <BlocksIcon/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            // className={editor.isActive('bulletList') ? 'is-active' : ''}
          >
            <ListBulletIcon/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            // className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            <Heading1/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            // className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            <Heading2/>
          </button>

          <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <FlipHorizontal/>
          </button>

          <button
            onClick={() => editor.chain().focus().setFontFamily('Inter').run()}
            // className={editor.isActive('textStyle', { fontFamily: 'Inter' }) ? 'is-active' : ''}
            data-test-id="inter"
          >
            <FontFamilyIcon/>
          </button>

         

         
          </div>
          </div>
    </div>
  )
}

export default EditorExtension