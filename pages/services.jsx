import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

import BlockPrice from '@containers/blockPrice/BlockPrice'
import BlockServicesItems from '@containers/blockServices/BlockServicesItems'

import { createClient } from 'contentful'
export async function getStaticProps( ) {

	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const services = await client.getEntries({ 
		content_type: 'services'
	})

	//************ USLUGI */
	const prices = await client.getEntries({ 
		content_type: 'priceServices'
	})
	//************ USLUGI */

	return {
		props: {
			uslugiPrice: prices.items,		// Цены на услуги
			allServices: services.items		// Все услуги
		}
		//revalidate: 10 //Обновлять раз в 10 секунд
	}
}

export default function Home({ 
	state,
	widthDevice,
	setmodalShow,
	uslugiPrice,
	allServices 
} ) {

	const i = 2
	const { seoTitle, seoDescription } = state.mainPages[i]

	return (
	<>
		<Head>
			<title>{ seoTitle }</title>
			<meta name="description" 		content={ seoDescription } />
			<meta property="og:title"		content={ seoTitle } />
			<meta property="og:description"	content={ seoDescription } />
		</Head>

		<Container fluid="xxl">
			<Row>
				<Col>
					<h1>
						{ state.indexServices.h2 }
					</h1>
				</Col>
			</Row>

			<BlockServicesItems 
				allServices={ allServices }
			/>

		</Container>

		<BlockPrice 
			header={ state.indexPrice.h2 }
			priceUslug={ uslugiPrice }
			widthDevice={ widthDevice }
			setmodalShow={ setmodalShow }
		/>

	</>
	)
}
