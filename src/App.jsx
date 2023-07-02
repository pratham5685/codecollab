import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import Editor from "@monaco-editor/react"
import * as Y from "yjs"
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco"
import Header from './Header'



function App() {
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    
    const doc = new Y.Doc(); // a collection of shared objects -> Text
    // Connect to peers (or start connection) with WebRTC
    const provider = new WebrtcProvider("test-room", doc); // room1, room2
    const type = doc.getText("monaco"); // doc { "monaco": "what our IDE is showing" }
    const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness);
    console.log(provider.awareness);      


    
    
  
  } 

  return ( 
  <div>
    <Header />
    
    
    <Editor 
      height="100vh"
      width="100vw"
      theme="vs-dark"
      defaultLanguage='python'
      //path="filename"
      onMount={handleEditorDidMount}
      defaultValue="Here is some"
    />
  </div>
  )
}

export default App
