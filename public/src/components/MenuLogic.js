import React , {useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import Menu from './Menu'
import useFetchFiles from '../hooks/useFetchFiles'
import useIsAdmin from '../hooks/useIsAdmin'
import useSocketIo from '../hooks/useSocketIo'
import {addFile , renameFile , deleteFile} from '../reducers/FileReducer'
export default function MenuLogic(){
    const dispatch = useDispatch()
    const allFiles = useSelector(state => state.files.allFiles)
    const filesLoadingStatus  = useSelector(state => state.files.loadingFilesStatus)
    const loading = filesLoadingStatus === 'pending'
    const fetchFiles = useFetchFiles()
    const isAdmin = useIsAdmin()
    const [emit , on] = useSocketIo()

    on('FILE_CREATED' , data => {
        dispatch(addFile(data))
    })
    on('FILE_RENAMED' , data => {
        dispatch(renameFile({id : data.id , name : data.name , extention : data.extention}))
    })
    on('FILE_DELETED' , data => {
        dispatch(deleteFile({id : data.id }))
    })

    useEffect(_ => fetchFiles() , [])
    return (
        <Menu allFiles={allFiles} loading={loading} isAdmin={isAdmin}/>
    )
}