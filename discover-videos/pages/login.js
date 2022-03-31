import Head from "next/head";
import styles from "../styles/Login.module.css";
import Image from "next/image";

const Login = () => {
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
			</header>
		</div>
	);
};

export default Login;