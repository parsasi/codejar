import React , {useContext} from 'react'
import ShareModalContext from '../contexts/ShareModalContext'
export default (props) => {
    let [isOpen , setIsOpen] = useContext(ShareModalContext)
    return (
        <li className="WindowBarListItem"><button className="WindowBarListItemButton" onClick={() => setIsOpen(true)}>Share</button></li>
    )
}