import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Banner from "../components/banner/banner"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix</title>
			</Head>

			<h1>Netflix</h1>

			<Banner
				title='Clifford the Red Dog'
				subTitle="A very cute dog"
				imgUrl="/static/clifford.webp"
			/>

			{/* <NavBar />


			<Card /> */}

		</div>
	)
}
