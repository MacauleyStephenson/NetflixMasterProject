import Navbar from "./navbar.module.css";

const NavBar = (props) => {
	const { Username } = props
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>Logo</div>
			<a className={styles.logoLink} href="/"></a>
			<div className={styles.logoWrapper}>Netflix</div>
			<ul className={styles.navItems}>
				<li className={styles.navItem}>Home</li>
				<li className={styles.navItem2}>My list</li>
			</ul>

			<nav className={styles.navContainer}>
				<div>
					<button className={styles.usernameBtn}>
						<p className={styles.username}>{Username}</p>
					</button>
					<div>
						<a>Sign out</a>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar;