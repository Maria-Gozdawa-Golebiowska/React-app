import styles from './NavBar.module.scss'
import { Link , NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <section className={styles.nav}>
            <div className={styles.icon}>
                <Link to='#'><span className="fa fa-tasks"></span></Link>
            </div>
            <div className={styles.links}>
                <ul>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>              
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>                  
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>    
                </ul>
            </div>
        </section>
    )
}

export default NavBar;