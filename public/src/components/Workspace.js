import React , {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import EditorContainerLogic from './EditorContainerLogic'
import fetchCodes from '../thunks/fetchWorkspaceCodes'
import LoadingWorkspace from './LoadingWorkspace'
import {
    Redirect,
    useParams
} from "react-router-dom";

export default function Workspace(props){
    const codeFetchStatus = useSelector(state => state.workspace.codeFetchStatus)
    const dispatch = useDispatch()
    const workspaceId = useSelector(state => state.workspace.workspaceId)
    const {ws_id : wsId} = useParams()
    useEffect(() => {
        dispatch(fetchCodes(wsId))
    }, [])
    switch(codeFetchStatus){
        case 'idle':
            return <LoadingWorkspace />
        case 'pending':
            return <LoadingWorkspace />
        case 'fulfilled':
            return <EditorContainerLogic />
        default:
            return <Redirect />
    }
}