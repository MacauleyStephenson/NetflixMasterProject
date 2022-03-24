import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix</title>
			</Head>

			<NavBar username="MacauleyS@gmail.com" />
			<Banner title='Clifford the dog' subTitle="A very cute dog!" imgUrl="/static/clifford.webp" />


			{/*
			<Card /> */}
		</div>
	);
}
