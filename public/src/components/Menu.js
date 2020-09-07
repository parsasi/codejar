import React , {useEffect} from 'react'
import MenuItemLogic from './MenuItemLogic'
import AddFileButtonLogic from './AddFileButtonLogic'
import '../styles/Menu.css'
import MenuLoading from './MenuLoading'
import Logo from '../assets/logo_transparent_hori.png'
export default function Menu(props){
        // const sampleArray = [{"name":"main.js","extention":".js","lang":"javascript","timeCreated":"2020-07-29T16:42:13.467Z","content":"","lastUpdated":"2020-07-29T16:42:13.467Z","current":true},{"name":"styles.css","extention":".js","lang":"javascript","timeCreated":"2020-07-29T16:42:17.440Z","content":"","lastUpdated":"2020-07-29T16:42:17.440Z","current":true}]
        return (
        <div className="menu">
            <div className="MenuLogo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="MenuFilesContainer">
                {
                    props.loading && (<MenuLoading />)
                }
                <div className="MenuItems">
                    {props.allFiles.map(item => (<MenuItemLogic key={item.id} file={item}/>))}
                </div>
                {props.isAdmin ? <AddFileButtonLogic /> : null}
            </div>
        </div>
    )
}