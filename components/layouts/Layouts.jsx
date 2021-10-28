import { useState, useEffect } from 'react'

import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import Header from '@components/dumb/header/Header'
import Navbar from '@components/dumb/navbar/Navbar'
import Footer from '@components/dumb/footer/Footer'

export default function Layout({ children, state }) {

	//Постоянно смотрим за разрешением 
	//для замены меню bootstrap 5 на offcanvas
	const useDeviceSize = () => {

		const [widthDevice, setWidthDevice] = useState(0)
		const handleWindowResize = () => {
			setWidthDevice(window.innerWidth);
		}
		useEffect(() => {
			handleWindowResize();
			window.addEventListener('resize', handleWindowResize);
			return () => window.removeEventListener('resize', handleWindowResize);
		}, []);

		return widthDevice
	}
	const widthDevice = useDeviceSize();

	return (
	<>
	
		<Head>
			<meta name="theme-color" content="#4985FF" />
			<link rel="shortcut icon" href="/assets/favicon/favicon.ico" type="image/x-icon" />
			<link rel="shortcut icon" href="/assets/favicon/favicon.png" type="image/png" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://xoronim.moscow/" />
			<meta property="og:site_name" content="xoronim.moscow" />
		</Head>

		<NextNprogress 
			color="#B9CDDA"
			startPosition={ 0.3 }
			stopDelayMs={ 200 }
			height={ 3 }
			showOnShallow={ true }
		/>

		<Header 
			widthDevice={ widthDevice }
			mainData={ state.mainData }
		/>

		<Navbar
			mainData={ state.mainData }
			mainPages={ state.mainPages }
			widthDevice={ widthDevice }
		/>
		
		{ children }

		{/* <Footer
			mainPages={ state.mainPages }
			mainData={ state.mainData }
		/> */}

	</>
	)
}