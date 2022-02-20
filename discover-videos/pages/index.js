import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NavBar from '../components/nav/navbar'
import Banner from "../components/banner/banner"
import Card from "../components/card/card";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix</title>
			</Head>


			<NavBar Username="Macauley@JS.com" />

			<Banner
				title='Clifford the Red Dog'
				subTitle="A very cute dog"
				imgUrl="/static/clifford.webp"
			/>

			<Card />

		</div>
	)
}
