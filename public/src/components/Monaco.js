import React from 'react'
import MonacoEditor from 'react-monaco-editor'
export default (props) => {
    return (
        <MonacoEditor
        width={props.width}
        height={props.height}
        language={props.lang}
        theme="vs-dark"
     />
    )
}