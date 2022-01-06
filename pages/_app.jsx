import { useState, useEffect } from 'react'
//import TagManager from 'react-gtm-module'
import Script from 'next/script'

import Layout from '@components/layouts/Layouts'
import ContactsModal from '@components/dumb/modal/ContactsModal'

import '@styles/app.scss'

import state from 'data/stateJSON.json'

// const tagManagerArgs = {
// 	gtmId: 'GTM-KHMK3T7'
// }

function Application({ Component, pageProps }) {

	//useEffect(() => {
		//Вызываем GTM
		//TagManager.initialize(tagManagerArgs);
	//},[])

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

		<Script
			//strategy="afterInteractive"
			strategy="lazyOnload"
			dangerouslySetInnerHTML={{
				__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-KHMK3T7');
				`,
			}}
		/>
	</>
	)
}

export default Application