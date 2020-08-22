import React , {useEffect} from 'react'
import { useSelector} from 'react-redux'
import Menu from './Menu'
import useFetchFiles from '../hooks/useFetchFiles'
import useIsAdmin from '../hooks/useIsAdmin'
export default function MenuLogic(){
    const allFiles = useSelector(state => state.files.allFiles)
    const filesLoadingStatus  = useSelector(state => state.files.loadingFilesStatus)
    const loading = filesLoadingStatus === 'pending'
    const fetchFiles = useFetchFiles()
    const isAdmin = useIsAdmin()
    useEffect(_ => fetchFiles() , [])
    return (
        <Menu allFiles={allFiles} loading={loading} isAdmin={isAdmin}/>
    )
}