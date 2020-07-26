import React from 'react'
import MenuItem from './MenuItem'
import { faCss3 , faHtml5 , faJs } from '@fortawesome/free-brands-svg-icons'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'


export default (props) => {
    const current = props.current ? "current" : ""
    const save = props.save ? "save": "css"
    const extention = props.file.extention
    const icon = figureOutTheIcon(extention)
    return (<MenuItem file={props.file} current={current} save={save} extention={extention} icon={icon}/>)
}
function figureOutTheIcon(extention){
    switch(extention){
        case 'css':
            return faCss3;
            break;
        case 'html':
            return faHtml5;
            break;
        case 'js':
            return faJs;
            break;
        default:
            return faDotCircle;
            break;
    }
}