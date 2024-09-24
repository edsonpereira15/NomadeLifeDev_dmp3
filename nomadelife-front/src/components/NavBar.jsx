import React from 'react'

const NavBar = () => {
  return (
    <>
        <nav className={Styles.navbar}>
            <div className={styles.brand}>
                Nomade <span>DEV</span>
            </div>
                <ul className={styles.links}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Register</a>
                    </li>
                    <li>
                        <a href="#">New Post</a>
                    </li>
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Exit</a>
                    </li>
                </ul>
        </nav>
    </>
  )
}



export default NavBar