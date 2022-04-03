import { useRouter } from "next/router";
import { useEffect } from 'react'

import { magic } from "../lib/magic-client";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(async () => {
		const isLoggedIn = await magic.user.isLoggedIn();
		if (isLoggedIn) {
			//route to
			router.push('/');
		} else {
			router.push('/login');
		}
	}, []);
	//route to /login
	return <Component {...pageProps} />
}

export default MyApp
