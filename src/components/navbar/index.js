import styles from "../navbar/index.module.css"


function NavBar (){
    return(
        <header className={styles.bg}>
        <div className={styles.header}>
        <a className={styles.logo} href="#">Agro<span>Mart&#174;</span></a>

        <nav>
          <ul className={styles.navbar}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">More Features</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </nav>

        <a href="#" className={styles.header_button}>Sign Up</a>
      </div>
    </header>
    )
}

export default NavBar;