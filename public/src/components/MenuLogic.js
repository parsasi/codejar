import React , {useContext} from 'react'
import FileReducerContext from '../contexts/FileReducerContext'
import Menu from './Menu'
export default function MenuLogic(){
    const [allFiles , allFilesDispatch] = useContext(FileReducerContext)
    return (
        <Menu allFiles={allFiles}/>
    )
}