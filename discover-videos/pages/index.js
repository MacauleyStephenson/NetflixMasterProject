import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';

import SectionCards from '../components/card/section-cards';

import { getVideos } from '../lib/videos';

export async function getServerSideProps() {
	const disneyVideos = await getVideos("disney trailer");

	const productivityVideos = await getVideos("Productivity");

	const travelVideos = await getVideos("Travel");

	// const popularVideos = await getVideos("disney trailer");

	return { props: { disneyVideos, travelVideos, productivityVideos } }
}

export default function Home({ disneyVideos, travelVideos, productivityVideos }) {
	console.log({ disneyVideos });
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix</title>
			</Head>

			<NavBar username="MacauleyS@gmail.com" />
			<Banner
				title='Clifford the Red Dog'
				subTitle="A very cute dog!"
				imgUrl="/static/clifford.webp" />
			<div className={styles.sectionWrapper}>
				<SectionCards
					title="Disney"
					videos={disneyVideos}
					size="large"
				/>
				<SectionCards
					title="Travel"
					videos={travelVideos}
					size="small"
				/>
				<SectionCards
					title="Productivity"
					videos={productivityVideos}
					size="medium"
				/>
				<SectionCards
					title="Popular"
					videos={disneyVideos}
					size="small"
				/>
			</div>
		</div>
	);
}
