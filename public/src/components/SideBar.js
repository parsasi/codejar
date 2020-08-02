import React from 'react'
import MenuLogic from './MenuLogic'
import '../styles/SideBar.css'
export default function SideBar(props){
    return (
        <div className="SideBar">
            <MenuLogic />
        </div>
    )
}