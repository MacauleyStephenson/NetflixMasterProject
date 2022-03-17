import Head from "next/head";
import Image from "next/image";

import styles from "../styles/login.module.css";

const Login = () => {
	return (
		<div>
			<Head>
				<title>Netflix SignIn</title>
			</Head>

			<header>
				<a className={styles.logoLink} href="/">
					<div className={styles.logoWrapper}>
						<Image
							src={"/static/netflix.svg"}
							alt="Netflix"
							width="128px"
							height="34px" />
					</div>
				</a>
			</header>
		</div>
	)
};

export default Login;