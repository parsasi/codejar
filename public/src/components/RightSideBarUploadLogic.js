import React from 'react'
import RightSideBarUpload from './RightSideBarUpload'
import useIsAdmin from '../hooks/useIsAdmin'
export default function RightSideBarUploadLogic(props){
    const isAdmin = useIsAdmin()
    return (
        <RightSideBarUpload isAdmin={isAdmin}></RightSideBarUpload>
    )
}