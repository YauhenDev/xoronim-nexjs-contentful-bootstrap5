import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import InnerHeader from '@containers/innerHeader/InnerHeader'

import BlockPrice from '@containers/blockPrice/BlockPrice'
import BlockServicesItems from '@containers/blockServices/BlockServicesItems'

import { createClient } from 'contentful'
export async function getStaticProps( ) {

	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	//************ USLUGI */
	const prices = await client.getEntries({ 
		content_type: 'priceServices'
	})
	//************ USLUGI */

	return {
		props: {
			uslugiPrice: prices.items		// Цены на услуги
		}
		//revalidate: 10 //Обновлять раз в 10 секунд
	}
}

export default function NotFound({ 
	state,
	widthDevice,
	setmodalShow,
	uslugiPrice
}) {

	return (
	<>
		<InnerHeader 
			h1="Ошибка 404. Страница не найдена"
		/>

		<BlockPrice 
			header={ state.indexPrice.h2 }
			priceUslug={ uslugiPrice }
			widthDevice={ widthDevice }
			setmodalShow={ setmodalShow }
		/>

	</>
	)
}
