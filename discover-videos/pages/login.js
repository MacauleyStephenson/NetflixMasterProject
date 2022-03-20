import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

import styles from "../styles/login.module.css";

const Login = () => {

	const [email, setEmail] = useState('');
	const [userMsg, setUserMsg] = useState("");

	const handleOnChangeEmail = (e) => {
		setUserMsg("");
		console.log("event", e);
		const email = e.target.value;
		setEmail(email);
	};

	const handleLoginwithEmail = (e) => {
		console.log("Hi button");
		e.preventDefault();

		if (email) {
			if (email === "macauleymmx@gmail.com") {
				//route to dashboard
				console.log("route to dashboard");
			} else {
				//show user message
				setUserMsg('Something went wrong logging in');
			}
		} else {
			//set user message
			setUserMsg("Enter a valid email address");
		}
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix SignIn</title>
			</Head>

			<header className={styles.header}>
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
						onClick={handleLoginwithEmail}
						className={styles.loginBtn}>Sign In</button>
				</div>
			</main>
		</div>
	)
};

export default Login;