import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NavBar from '../components/nav/navbar'
import Banner from "../components/banner/banner"
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";

export default function Home() {

	const disneyVideos = [
		{
			imgUrl: "/static/clifford.webp"
		},
		{
			imgUrl: "/static/clifford.webp"
		},
		{
			imgUrl: "/static/clifford.webp"
		},
	]
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
			<div className={styles.sectionWrapper}>
				<SectionCards title="Disney" videos={disneyVideos} size={"large"} />
				<SectionCards title="Disney" videos={disneyVideos} size={"medium"} />
			</div>

		</div>
	)
}
