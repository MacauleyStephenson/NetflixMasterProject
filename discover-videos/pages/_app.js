import { useRouter } from "next/router";
import { useEffect, useState } from 'react'

import { magic } from "../lib/magic-client";
import '../styles/globals.css'

import Loading from "../components/loading/loading";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(async () => {
		const isLoggedIn = await magic.user.isLoggedIn();
		if (isLoggedIn) {
			//route to /
			router.push('/');
		} else {
			router.push('/login');
		}
	}, []);

	useEffect(() => {
		const handleComplete = () => {
			setIsLoading(false);
		};
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		}
	}, [router]);

	//route to /login
	return isLoading ? <Loading /> : <Component {...pageProps} />
}

export default MyApp
