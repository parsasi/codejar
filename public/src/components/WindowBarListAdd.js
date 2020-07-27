import React , {useContext} from 'react'
import AddFileModalContext from '../contexts/AddFileModalContext'
export default (props) => {
    let [isOpen , setIsOpen] = useContext(AddFileModalContext)
    return (
        <li className="WindowBarListItem"><button className="WindowBarListItemButton" onClick={() => setIsOpen(true)}>Add</button></li>
    )
}