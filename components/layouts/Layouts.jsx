import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import Header from '@components/dumb/header/Header'
import Navbar from '@components/dumb/navbar/Navbar'
import Footer from '@components/dumb/footer/Footer'

export default function Layout({ 
	children, 
	state, 
	widthDevice, 
	setmodalShow 
}) {

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

		<Footer 
			mainPages={ state.mainPages }
		/>

	</>
	)
}