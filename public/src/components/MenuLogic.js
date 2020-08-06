import React , {useEffect} from 'react'
import fetchFiles from '../thunks/fetchFilesThunk'
import { useSelector , useDispatch } from 'react-redux'
import Menu from './Menu'
export default function MenuLogic(){
    const allFiles = useSelector(state => state.files.allFiles)
    const filesLoadingStatus  = useSelector(state => state.files.loadingFilesStatus)
    const loading = filesLoadingStatus === 'pending'
    const wsId = useSelector(state => state.workspace.workspaceId)
    const dispatch = useDispatch()
    
    useEffect(_ => dispatch(fetchFiles(wsId)) , [])
    return (
        <Menu allFiles={allFiles} loading={loading}/>
    )
}