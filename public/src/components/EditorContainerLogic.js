import React from 'react'
import EditorContainer from './EditorContainer'
import {
    Redirect,
    useParams
} from "react-router-dom";
export default function EditorContainerLogic(props){
    const {ws_id : wsId} = useParams()
    return wsId ? <EditorContainer /> : <Redirect  to={{
        pathname: "/",
        state: { from: props.location }
      }} />
}