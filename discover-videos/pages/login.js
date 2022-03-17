import Head from "next/head";
import Image from "next/image";

import styles from "../styles/login.module.css";

const Login = () => {

	const handleLoginwithEmail = (e) => {
		console.log("Hi button");
		e.preventDefault();
	}
	return (
		<div>
			<Head>
				<title>Netflix SignIn</title>
			</Head>

			<header>
				<div className={styles.headerWrapper}>
					<a className={styles.logoLink} href="/">
						<div className={styles.logoWrapper}>
							<Image
								src={"/static/netflix.svg"}
								alt="Netflix"
								width="128px"
								height="34px" />
						</div>
					</a>
				</div>

				<main className={styles.main}>
					<div className={styles.mainWrapper}>
						<h1 className={styles.signinHeader}>Sign In</h1>
						<input type="text" placeholder="Email address" className={styles.emailInput} />

						<p className={styles.userMsg}></p>

						<button onClick={handleLoginwithEmail} className={styles.loginbtn}>Sign In
						</button>
					</div>
				</main>
			</header>
		</div>
	)
};

export default Login;