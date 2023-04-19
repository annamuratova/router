import {NavLink, Outlet} from 'react-router-dom'
import classes from '../assets/styles/sidebar.module.css'
// import { Outlet } from 'react-router-dom'
const Sidebar = ()=>{
    return(
        <div className={classes.sidebar}>
            <ul>
            <NavLink to="stat" className={({isActive}) =>isActive ? classes.active : ''}>
            <li>Statistika</li>
            </NavLink>
            <NavLink to="brend" className={({isActive}) =>isActive ? classes.active : ''}>
            <li>Brendlar</li>
            </NavLink>
            <NavLink to="add" className={({isActive}) =>isActive ? classes.active : ''}>
            <li>Telofon qo'shish</li>
            </NavLink>
            </ul>
          
        </div>
    )
}

export default Sidebar