import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Redirect } from 'react-router-dom'
import LandingPageContainer from './LandingPageContainer'
import postWorkspaceCreate  from '../thunks/postWorkspaceCreate'
export default function LandingPageContainerLogic(props){
    const dispatch = useDispatch()
    function newWorkspaceHandler(){
        dispatch(postWorkspaceCreate())
    }
    const workspaceId = useSelector(state => state.workspace.workspaceId)
    workspaceId && window.location.replace(`/ws/${workspaceId}`)
    return <LandingPageContainer newWorkspaceHandler={newWorkspaceHandler} />
}