import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <section className={styles.nav}>
            <div className={styles.icon}>
                <a href='#'><span className="fa fa-tasks"></span></a>
            </div>
            <div className={styles.links}>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>Favorite</a></li>
                    <li><a href='/favorite'>About</a></li>

                </ul>
            </div>
        </section>
    )
}

export default NavBar;