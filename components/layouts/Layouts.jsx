import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
//import dynamic from 'next/dynamic'

import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import Header from '@components/dumb/header/Header'
import Navbar from '@components/dumb/navbar/Navbar'
import YandexMap from '@containers/yandexMap/YandexMap'
import Footer from '@components/dumb/footer/Footer'

/* const YandexMap = dynamic(() => import('@containers/yandexMap/YandexMap'), {
    ssr: false, // do not render this on the server side render
    loading: () => <div>Загрузка карты...</div>
}); */


export default function Layout({ 
	children, 
	state, 
	widthDevice,
	setmodalShow 
}) {

	const asPath = useRouter()


	// Состояние карты
	const [showYandexMap, setShowYandexMap] = useState(false);
	useEffect(() => {
		// Загружаем карту через 4 секунды
		const timeOut = setTimeout(() => setShowYandexMap(true), 3000);
    	return () => clearTimeout(timeOut);
	},[])

	//console.log( children[0]. )
	//debugger;
	return (
	<>
	
		<Head>
			<meta name="theme-color" content="#D7DAE5" />
			<link rel="shortcut icon" href="/assets/favicon/favicon.png" type="image/png" />
			<link rel="icon" href="/assets/favicon/favicon.svg" type="image/svg+xml" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://xoronim.moscow/" />
			<meta property="og:site_name" content="XORONIM.moscow" />
			<meta property="og:image" content="/assets/img/xoronim.jpg" />
		</Head>

		<NextNprogress 
			color="#B9CDDA"
			startPosition={ 0.3 }
			stopDelayMs={ 200 }
			height={ 3 }
			showOnShallow={ true }
		/>

		<Header 
			mainData={ state.mainData }
			setmodalShow={ setmodalShow }
		/>

		<Navbar
			mainData={ state.mainData }
			mainPages={ state.mainPages }
			widthDevice={ widthDevice }
		/>

		{ children }

		{/*
			asPath.pathname == '/' 
			? 
				<>
					111
					{ children }
					111
				</>
			: 
				<>
					222
					{ children }
					222
				</>
		*/ }

		{/* https://question-it.com/questions/2910241/kak-otlozhit-zagruzku-komponenta-karty-s-pomoschju-huka-useeffect-dlja-sajta-react-next-js */}
		{showYandexMap && <YandexMap /> }

		<Footer 
			mainData={ state.mainData }
			mainPages={ state.mainPages }
			pagePrice={ state.pagePrice }
			pageInfo={ state.pageInfo }
			pagePrivacy={ state.pagePrivacy }
		/>

	</>
	)
}