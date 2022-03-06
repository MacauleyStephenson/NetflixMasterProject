import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NavBar from '../components/nav/navbar'
import Banner from "../components/banner/banner"
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";

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

			<SectionCards title='Disney' />

			<Card imgUrl='/static/clifford.webp' size="large" />
			<Card size="medium" />
			<Card imgUrl='/static/clifford.webp' size="small" />

		</div>
	)
}
