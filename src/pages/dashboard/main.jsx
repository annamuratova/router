 import Sidebar from "../../components/sidebar"
import {Outlet} from "react-router-dom"
import classes from '../../assets/styles/main.module.css'
import Navbar from "../../components/navbar"

 const MainDashboard = ()=>{
    return(
        <div className={classes.main}>
        <div className={classes.sidebarWrap}>
            <Sidebar/>
        </div>
        <div className={classes.main_content}>
            <Navbar/>
    <Outlet/>
    </div>
    </div>
    )
}

export default MainDashboard