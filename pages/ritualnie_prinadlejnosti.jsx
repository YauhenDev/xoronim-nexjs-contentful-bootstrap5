import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'

import {Container, Row, Col } from 'react-bootstrap'

import InnerHeader from '@containers/innerHeader/InnerHeader'
import Breadcrumbs from '@components/dumb/breadcrum/Breadcrumbs'
import BlockPrice from '@containers/blockPrice/BlockPrice'

//import BlockProduction from '@containers/blockProductions/BlockProductions'


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
			uslugiPrice: prices.items,		// Цены на услуги
		}
		//revalidate: 10 //Обновлять раз в 10 секунд
	}
}

export default function Home({ 
	state,
	widthDevice,
	setmodalShow,
	uslugiPrice
} ) {

	const { asPath } = useRouter()
	const i = 3
	const { titleLink, seoTitle, seoDescription } = state.mainPages[i]


	const imgNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
	
	// for (let numberImg = 0; numberImg < 29; numberImg++) {
	// 	return numberImg
	// }
	// const imgNumber2 = [numberImg]

	//debugger;
	return (
	<>
		<Head>
			<title>{ seoTitle }</title>
			<meta name="description" 		content={ seoDescription } />
			<meta property="og:title"		content={ seoTitle } />
			<meta property="og:description"	content={ seoDescription } />
		</Head>

		<InnerHeader 
			h1={ titleLink }
		/>

		<Breadcrumbs
			pathLink={ asPath }
			nameLink={ state.mainPages[i].nameLink }
		/>

		<Container as="section" fluid="xxl">
			<Row>
				<Col 
					xl={ 12 }
				>
					<h2>Гробы от 16 000 руб.</h2>
				</Col>
			</Row>
			<Row>
	
				{ imgNumber.map( (p, i) => (
					<Col 
						key={ i }
						md={ 6 }
						lg={ 4 }
						xl={ 3 }
					>
						<Image 
							src={`/assets/products/groby/${p}.jpg`}
							alt=""
							width={300}
							height={300}
							className="card-img-top"
						/>
					</Col>
				))}
			</Row>
			<Row>
				<Col 
					xl={ 12 }
				>
					<h2>Венки от 3 000 руб.</h2>
				</Col>
			</Row>
			<Row>
				{ imgNumber.map( (p, i) => (
					<Col 
						key={ i }
						md={ 6 }
						lg={ 4 }
						xl={ 3 }
					>
						<Image 
							src={`/assets/products/venki/${p}.jpg`}
							alt=""
							width={300}
							height={300}
							className="card-img-top"
						/>
					</Col>
				))}
			</Row>
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
