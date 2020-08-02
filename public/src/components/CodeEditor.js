import React from 'react'
import Monaco from './Monaco'
import '../styles/CodeEditor.css'
export default function CodeEditor(props){
    return (
        <div className="code">
            <Monaco width={100 + '%'} height={100 +'%'} lang={props.currentFile.lang || 'javascript'} value={props.currentFile.content || ''} onChange={props.onChange}/>
        </div>
    )
}