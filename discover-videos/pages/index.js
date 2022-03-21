import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NavBar from '../components/nav/navbar'
import Banner from "../components/banner/banner"
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";

import { getVideos } from "../lib/videos";

import { magic } from '../lib/magic-client';

export async function getServerSideProps() {
	const disneyVideos = await getVideos("disney trailer");

	const travelVideos = await getVideos("travel");

	const productivityVideos = await getVideos("Productivity");

	const popularVideos = await getVideos("disney trailer");

	return { props: { disneyVideos, travelVideos, productivityVideos, popularVideos } }
}

export default function Home({ disneyVideos, travelVideos, productivityVideos, popularVideos }) {
	console.log({ magic })
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix</title>
			</Head>

			<div className={styles.main}>
				<NavBar Username="Macauley@JS.com" />
				<Banner
					title='Clifford the Red Dog'
					subTitle="A very cute dog"
					imgUrl="/static/clifford.webp"
				/>
				<div className={styles.sectionWrapper}>
					<SectionCards title="Disney" videos={disneyVideos} size={"large"} />
					<SectionCards title="Travel" videos={travelVideos} size={"small"} />
					<SectionCards title="Productivity" videos={productivityVideos} size={"medium"} />
					<SectionCards title="Popular" videos={disneyVideos} size={"small"} />
				</div>
			</div>
		</div>
	)
}
