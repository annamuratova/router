import classes from '../assets/styles/login.module.css'
import { Link } from"react-router-dom"

const LoginPage = ()=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    
    return(
        <div className={classes.login}>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Parol"/>
                 <Link to="/dashboard/stat"><button>kirish</button></Link>
            </form>
        </div>
    )
}
export  default LoginPage