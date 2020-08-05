import React, { useDebugValue } from 'react'
import { useDispatch } from 'react-redux'
import { setworkspaceId} from '../reducers/WorkspaceReducer'
import EditorContainer from './EditorContainer'
import {
    Redirect,
    useParams
} from "react-router-dom";
export default function EditorContainerLogic(props){
    const dispatch = useDispatch()
    const {ws_id : wsId} = useParams()
    if(wsId){
        dispatch(setworkspaceId({id : wsId}))
        return  <EditorContainer />
    }else{
        return (<Redirect  to={{
            pathname: "/",
            state: { from: props.location }
          }} />)
    }
}