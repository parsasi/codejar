import React , {useContext} from 'react'
import ShareModalContext from '../contexts/ShareModalContext'
export default function WindowBarListShare(props){
    let [isOpen , setIsOpen] = useContext(ShareModalContext)
    return (
        <li className="WindowBarListItem"><button className="WindowBarListItemButton" onClick={() => setIsOpen(true)}>Share</button></li>
    )
}