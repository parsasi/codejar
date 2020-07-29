import React from 'react'
import MonacoEditor from 'react-monaco-editor'
export default function Monaco(props){
    return (
        <MonacoEditor
        width={props.width}
        height={props.height}
        language={props.lang}
        theme="vs-dark"
     />
    )
}