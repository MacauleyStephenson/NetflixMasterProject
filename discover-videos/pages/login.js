import { useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import styles from "../styles/Login.module.css";
import Image from "next/image";

const Login = () => {
	const [email, setEmail] = useState('');
	const [userMsg, setUserMsg] = useState("");

	const router = useRouter();

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
			if (email == 'macauleymmx@gmail.com') {
				router.push("/");
			} else {
				setUserMsg('Something went wrong logging in');
			}
		} else {
			//show user message
			setUserMsg("Enter a valid email address");
		}
	};



	return (
		<div className={styles.container}>
			<Head>
				<title>Login</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<header className={styles.header}>
				<div className={styles.headerWrapper}>
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
				</div>
			</header>

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

		</div>
	);
};

export default Login;