import React , {useEffect , useContext} from 'react'
import {useDispatch} from 'react-redux'
import {changeCurrentFile , deleteFile} from '../reducers/FileReducer'
import MenuItem from './MenuItem'
import { faCss3 , faHtml5 , faJs , faJava , faPython , faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import useFetchFileContent from '../hooks/useFetchFileContent'
import MenuItemContextMenu from './MenuItemContextMenu'
import { MenuProvider } from 'react-contexify'
import DeleteFileModalContext from '../contexts/DeleteFileModalContext'


export default function MenuItemLogic(props){
    const fetchFileContent = useFetchFileContent()
    const dispatch = useDispatch()
    const current = props.file.current ? "current" : ""
    const save = props.file.saved ? "save": "css"
    const extention = props.file.extention
    const icon = figureOutTheIcon(extention)
    const [ , setDeleteIsOpen] = useContext(DeleteFileModalContext)


    const menuItemClickHandler = (e) => {
        const id = e.currentTarget.getAttribute('_id')
        !props.file.syncing && dispatch(changeCurrentFile({id}))
    }

    const deleteClickHandler = (id) => {
        setDeleteIsOpen(id)
    }

    useEffect(() => {
        if(!props.file.justCreated){
            fetchFileContent(props.file.id)
        }
    } , [props.file.id , props.file.justCreated])


    return (
        <>
            <MenuProvider id={props.file.id}>
                <><MenuItem file={props.file} error={props.file.error} syncing={props.file.syncing} current={current} save={save} extention={extention} icon={icon} menuItemClickHandler={menuItemClickHandler} /></>
            </MenuProvider>
            <MenuItemContextMenu id={props.file.id} renameHandler={e => console.log('Rename clicked'  , e)} deleteHandler={id => deleteClickHandler(id)}/>
        </>
        )
}

function figureOutTheIcon(extention){
    const extentionToIconMap = {
        css : faCss3,
        html : faHtml5,
        js : faJs,
        py : faPython,
        java : faJava,
        md : faMarkdown,
        other : faDotCircle,
    }
    return extentionToIconMap[extention] ? extentionToIconMap[extention] : extentionToIconMap['other']
}


