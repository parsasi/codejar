import React , {useEffect} from 'react'
import MenuItemLogic from './MenuItemLogic'
import AddFileButtonLogic from './AddFileButtonLogic'
import '../styles/Menu.css'
import Logo from '../assets/logo_transparent_sq.png'
export default function Menu(props){
        // const sampleArray = [{"name":"main.js","extention":".js","lang":"javascript","timeCreated":"2020-07-29T16:42:13.467Z","content":"","lastUpdated":"2020-07-29T16:42:13.467Z","current":true},{"name":"styles.css","extention":".js","lang":"javascript","timeCreated":"2020-07-29T16:42:17.440Z","content":"","lastUpdated":"2020-07-29T16:42:17.440Z","current":true}]
        return (
        <div className="menu">
            <div className="MenuLogo">
                <img src={Logo} alt="Logo"/>
            </div>
            {props.allFiles.map(item => (<MenuItemLogic current={item.current} save={item.saved} file={{extention : item.extention , name:item.name , id : item.id}}/>))}
            <AddFileButtonLogic />
        </div>
    )
}