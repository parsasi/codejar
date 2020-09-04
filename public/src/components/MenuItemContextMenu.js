import React from 'react'
import { Menu, Item, Separator } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

export default function MenuItemContextMenu(props){
    return (
        <Menu id={props.id}>
            <Item id={props.id} onClick={_=>props.renameHandler(props.id)}>Rename</Item>
            <Item id={props.id} onClick={_ => props.deleteHandler(props.id)}>Delete</Item>
            <Separator />
            <Item disabled>Download</Item>
        </Menu>
    )
}