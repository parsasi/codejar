import React from 'react'
import Fa from './Fa'
import MenuItemLogic from './MenuItemLogic'
import AddFileButton from './AddFileButton'
export default (props) => {
    return (
        <div className="menu">
            <span>Work area</span>
            <MenuItemLogic current={true} save={true} file={{extention : 'css' , name:'styles'}}/>
            <MenuItemLogic current={false} save={false} file={{extention : 'html' , name:'index'}}/>
            <MenuItemLogic current={false} save={true} file={{extention : 'js' , name:'main'}}/>
            <AddFileButton></AddFileButton>
        </div>
    )
}