import React from 'react'
import Fa from './Fa'
import { faSave } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    return (
        <div className="windowbar">
            <span>File</span><span>Editing</span><span>Search</span><span>Show</span><span>Navigation</span><span>Development</span><span>Tools</span><span>Help</span>
            <div className="controls">
                <span className="min"><ion-icon name="arrow-down"></ion-icon></span>
                <span className="max"><ion-icon name="arrow-up"></ion-icon></span>
                <a className="close" href="#save"><Fa icon={faSave}/></a>
            </div>
        </div>
    )
}