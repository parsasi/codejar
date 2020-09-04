import React from 'react'
import { Menu, Item, Separator , theme , animation } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import { faTrashAlt , faItalic, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import Fa from './Fa'

export default function MenuItemContextMenu(props){
    return (
        <Menu id={props.id} theme={theme.dark} animation={animation.fade}>
            <Item id={props.id} onClick={_=>props.renameHandler(props.id)}>
                <Fa icon={faItalic}/>&nbsp;
                Rename
            </Item>
            <Item id={props.id} onClick={_ => props.deleteHandler(props.id)}>
                <Fa icon={faTrashAlt}/>&nbsp;
                Delete
            </Item>
            <Separator />
            <Item disabled>
                <Fa icon={faCloudDownloadAlt} /> &nbsp;
                Download
            </Item>
        </Menu>
    )
}