import { useRouter } from 'next/router'
import Script from 'next/script'

import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import Header from '@components/dumb/header/Header'
import Navbar from '@components/dumb/navbar/Navbar'
import YandexMap from '@containers/yandexMap/YandexMap'
import Footer from '@components/dumb/footer/Footer'


export default function Layout({ 
	children, 
	state, 
	widthDevice,
	setmodalShow 
}) {

	const asPath = useRouter()

	//console.log( children[0]. )
	//debugger;
	return (
	<>
	
		<Head>
			<meta name="theme-color" content="#D7DAE5" />
			<link rel="shortcut icon" href="/assets/favicon/favicon.png" type="image/png" />
			<link rel="icon" href="/assets/favicon/favicon.svg" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://xoronim.moscow/" />
			<meta property="og:site_name" content="XORONIM.moscow" />
			<meta property="og:image" content="/assets/img/xoronim.jpg" />
		</Head>

		<Script
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-KHMK3T7');
				`,
			}}
		/>

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

		<YandexMap />

		<Footer 
			mainData={ state.mainData }
			mainPages={ state.mainPages }
		/>

	</>
	)
}