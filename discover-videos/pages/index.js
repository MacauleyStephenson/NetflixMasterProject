import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix</title>
			</Head>

			<h1>Netflix</h1>
		</div>
	)
}
