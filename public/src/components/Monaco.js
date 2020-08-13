import React from 'react'
import MonacoEditor from 'react-monaco-editor'
export default function Monaco(props){
    return (
        <MonacoEditor
        width={props.width}
        height={props.height}
        language={props.lang}
        value={props.value}
        onChange={e => props.onChange(e)}
        theme="vs-dark"
     />
    )
}