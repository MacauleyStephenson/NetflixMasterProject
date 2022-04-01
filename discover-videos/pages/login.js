import { useState } from "react";

import Head from "next/head";
import styles from "../styles/Login.module.css";
import Image from "next/image";

const Login = () => {
	const [email, setEmail] = useState('');
	const [userMsg, setUserMsg] = useState("");

	const handleOnChangeEmail = (e) => {
		setUserMsg("")
		console.log("event", e);
		const email = e.target.value;
		setEmail(email);

	};

	const handleLoginWithEmail = (e) => {
		console.log("hi button");
		e.preventDefault();

		if (email) {
			//route to dashboard
		} else {
			//show user message
			setUserMsg("Enter a valid email address");
		};
	};



	return (
		<div>
			<Head>
				<title>Login</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<header>
				<a className={styles.logoLink} href="/">
					<div className={styles.logoWrapper}>
						<Image
							src="/static/netflix.svg"
							alt="Netflix logo"
							width="128px"
							height="34px"
						/>
					</div>
				</a>

				<main className={styles.main}>
					<div className={styles.mainWrapper}>
						<h1 className={styles.signinHeader}>Sign In</h1>
						<input
							type="text"
							placeholder="Email address"
							className={styles.emailInput}
							onChange={handleOnChangeEmail}
						/>

						<p className={styles.userMsg}>{userMsg}</p>
						<button
							onClick={handleLoginWithEmail}
							className={styles.loginBtn}>
							Sign In
						</button>
					</div>
				</main>
			</header>
		</div>
	);
};

export default Login;