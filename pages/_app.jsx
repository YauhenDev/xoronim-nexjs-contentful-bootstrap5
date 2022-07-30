import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//import Script from 'next/script'
//import TagManager from 'react-gtm-module'
import { sendMetrik } from '@lib/metriks'

import Layout from '@components/layouts/Layouts'
import ContactsModal from '@components/dumb/modal/ContactsModal'

import '@styles/app.scss'

import { state } from 'data/stateJSON'

// const tagManagerArgs = {
//     gtmId: process.env.NEXT_PUBLIC_GTM_ID
// }

function Application({ Component, pageProps }) {

	const router = useRouter()

	// useEffect(() => {
	// 	//Вызываем GTM
	// 	setTimeout(() => {
	// 		TagManager.initialize(tagManagerArgs);
	// 	}, 3200);
	// },[])

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

	// Установка Yandex.Metrika + GTM
	useEffect(() => {

		// Иницилизация Y.M.
		//console.log(`Иницилизация Y.M на url ${ asPath }`)
		sendMetrik('init', {
			defer: true, //отключить автоматическую отправку данных о просмотрах https://yandex.ru/support/metrica/code/counter-spa-setup.html?lang=ru
			triggerEvent: true,	// Проверка инициализации счетчика https://yandex.ru/support/metrica/code/counter-initialize.html
			clickmap:true,
			trackLinks:true,
			accurateTrackBounce:true,
			webvisor:true,
			trackHash:true
	   });

	   // Если URL меняется
		const handleRouteChange = (url) => {
			//console.log(`URL изменен на ${url}`)
			//Отправляем событие HIT в Y.М
			sendMetrik('hit', url);
			//Отправляем событие pageview в GTM
			window.dataLayer.push({
				event: 'pageview',
				page: url,
			});
		}
		router.events.on('routeChangeStart', handleRouteChange)
		return () => {
		  router.events.off('routeChangeStart', handleRouteChange)
		}
	  }, [])

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

		</Layout>

		<ContactsModal	
			modalShow={ modalShow }
			setmodalShow={ setmodalShow }
			mainData={ state.mainData }
		/>

		 {/* <Script
			strategy="lazyOnload"
			dangerouslySetInnerHTML={{
				/*
				https://vc.ru/dev/158627-uskoryaem-rabotu-sayta-na-etape-razrabotki-i-obgonyaem-konkurentov-v-poiske-chast-2
				https://osipenkov.ru/yandex-metrika-gtm-tag/
				https://osipenkov.ru/yandex-metrica-debugger/
				* /
				__html: `
					(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

					ym(87015504, "init", {
						defer: true,
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						trackHash:true
				   });
				`,
			}}
		/> */}

	</>
	)
}

export default Application