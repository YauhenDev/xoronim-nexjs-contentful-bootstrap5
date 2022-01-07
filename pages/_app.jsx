import { useState, useEffect } from 'react'
import TagManager from 'react-gtm-module'

import Layout from '@components/layouts/Layouts'
import ContactsModal from '@components/dumb/modal/ContactsModal'

import '@styles/app.scss'

import state from 'data/stateJSON.json'

const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ,
    dataLayerName: 'PageDataLayer'
}

function Application({ Component, pageProps }) {

	//const [showGtm, setShowGtm] = useState(false);

	useEffect(() => {
		//Вызываем GTM
		setTimeout(() => {
			TagManager.initialize(tagManagerArgs);
		}, 2500);
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

	</>
	)
}

export default Application