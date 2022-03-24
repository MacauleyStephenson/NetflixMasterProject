import styles from "./navbar.module.css";


const NavBar = (props) => {
	const { username } = props;
	return (
		<div className={styles.container}>Navbar
			<ul>
				<li>Home</li>
				<li>My List</li>
			</ul>
			<nav>
				<div>
					<button><p>{username}</p></button>

					<div><a>Sign Out</a></div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar;