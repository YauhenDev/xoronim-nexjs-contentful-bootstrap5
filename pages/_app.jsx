import { useState, useEffect } from 'react'
import TagManager from 'react-gtm-module'
//import Script from 'next/script'

import Layout from '@components/layouts/Layouts'
import ContactsModal from '@components/dumb/modal/ContactsModal'
//import Gtm from '@components/gtm/Gtm'

import '@styles/app.scss'

import state from 'data/stateJSON.json'

function Application({ Component, pageProps }) {

	//const [showGtm, setShowGtm] = useState(false);

	useEffect(() => {
		//Вызываем GTM
		setTimeout(() => {
			TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
		  }, 4000);

		//const timeOut = setTimeout(() => setShowGtm(true), 2500);
    	//return () => clearTimeout(timeOut);
	},[])

	//Постоянно смотрим за разрешением 
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

	//Состояние модального окна
	const [modalShow, setmodalShow] = useState(false);

	//debugger;
	return (
	<>
		<Layout
			state={ state }
			widthDevice={ widthDevice }
			setmodalShow={setmodalShow}
		>

			<Component 
				{...pageProps}
				state={ state }
				widthDevice={ widthDevice }
				setmodalShow={ setmodalShow}
			/>

			<ContactsModal	
				modalShow={ modalShow }
				setmodalShow={ setmodalShow }
			/>

		</Layout>

		{
			//showGtm && <Gtm /> 
		}

	</>
	)
}

export default Application