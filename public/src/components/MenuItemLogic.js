import React from 'react'
import MenuItem from './MenuItem'
import { faCss3 , faHtml5 , faJs , faJava , faPython , faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'


export default function MenuItemLogic(props){
    const current = props.current ? "current" : ""
    const save = props.save ? "save": "css"
    const extention = props.file.extention
    const icon = figureOutTheIcon(extention)
    return (<MenuItem file={props.file} current={current} save={save} extention={extention} icon={icon}/>)
}

function figureOutTheIcon(extention){
    const extentionToIconMap = {
        css : faCss3,
        html : faHtml5,
        js : faJs,
        py : faPython,
        java : faJava,
        md : faMarkdown,
        other : faDotCircle,
    }
    return extentionToIconMap[extention] ? extentionToIconMap[extention] : extentionToIconMap['other']
}


