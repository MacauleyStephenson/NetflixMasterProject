import { useState } from "react";
import styles from "./navbar.module.css";

import { useRouter } from "next/router";

import Link from "next/link";

const NavBar = (props) => {
	const { Username } = props;

	const [showDropdown, setShowDropdown] = useState(false);

	const handleShowDropdown = (e) => {
		e.preventDefault();
		setShowDropdown(!showDropdown);
	}

	const router = useRouter();

	const handleOnClickHome = (e) => {
		e.preventDefault()
		router.push('/')
	};

	const handleOnClickMyList = (e) => {
		e.preventDefault()
		router.push('/browse/my-list')
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<a className={styles.logoLink} href="/">
					<div className={styles.logoWrapper}>Netflix</div>
				</a>

				<ul className={styles.navItems}>
					<li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
					<li className={styles.navItem2} onClick={handleOnClickMyList}>My list</li>
				</ul>

				<nav className={styles.navContainer}>
					<div>
						<button className={styles.usernameBtn} onClick={handleShowDropdown}>
							<p className={styles.username}>{Username}</p>
							{/* {expand more icon} */}
						</button>
						{showDropdown && (
							<div className={styles.navDropdown}>
								<div>
									<Link href="/login">
										<a className={styles.linkName}>Sign out</a>
									</Link>
									<div className={styles.lineWrapper}>
									</div>
								</div>
							</div>
						)}
					</div>
				</nav>
			</div>
		</div>
	)
}

export default NavBar;