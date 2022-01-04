import { useState, useEffect } from 'react'
import TagManager from 'react-gtm-module'

import Layout from '@components/layouts/Layouts'
import ContactsModal from '@components/dumb/modal/ContactsModal'

import '@styles/app.scss'

import state from 'data/stateJSON.json'

const tagManagerArgs = {
	gtmId: 'GTM-KHMK3T7'
}

function Application({ Component, pageProps }) {

	useEffect(() => {
		//Вызываем GTM
		TagManager.initialize(tagManagerArgs);
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
	)
}

export default Application