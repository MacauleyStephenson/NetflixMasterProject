import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import styles from "../styles/Login.module.css";
import { magic } from '../lib/magic-client';

import Image from "next/image";

const Login = () => {
	const [email, setEmail] = useState('');
	const [userMsg, setUserMsg] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const handleComplete = () => {
			setIsLoading(false);
		};
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		}
	}, [router])

	const handleOnChangeEmail = (e) => {
		setUserMsg("")
		console.log("event", e);
		const email = e.target.value;
		setEmail(email);

	};

	const handleLoginWithEmail = async (e) => {
		console.log("hi button");
		e.preventDefault();


		if (email) {
			if (email == 'macauleymmx@gmail.com') {
				try {
					setIsLoading(true);

					const didToken = await magic.auth.loginWithMagicLink({
						email,
					});
					console.log({ didToken });
					if (didToken) {
						router.push("/");
					}
				} catch (error) {
					console.log("something went wrong logging in", error);
					setIsLoading(false);
				}
			} else {
				setIsLoading(false);
				setUserMsg('Something went wrong logging in');
			}
		} else {
			//show user message
			setIsLoading(false);
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
						{isLoading ? 'Loading..' : "Sign In"}
					</button>
				</div>
			</main>

		</div>
	);
};

export default Login;