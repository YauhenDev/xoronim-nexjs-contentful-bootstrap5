import { useRouter } from 'next/router'
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {Container, Row, Col } from 'react-bootstrap'

import InnerHeader from '@containers/innerHeader/InnerHeader'
import Breadcrumbs from '@components/dumb/breadcrum/Breadcrumbs'
import BlockPrice from '@containers/blockPrice/BlockPrice'

import { createClient } from "contentful"
const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export const getStaticPaths = async() => {
	const priceUslug = await client.getEntries({
		content_type: 'priceServices'
	})

	const paths = priceUslug.items.map(item => {
		return {
			params: {
				slug: item.fields.slug
			}
		}
	})
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {

	const { items } = await client.getEntries({
		content_type: 'priceServices',
		'fields.slug': params.slug
	})

	//************ USLUGI */
	const prices = await client.getEntries({ 
		content_type: 'priceServices'
	})
	//************ USLUGI */

	return {
		props: {
			priceServices: items[0],
			uslugiPrice: prices.items	//************ USLUGI  */
			
		}
	}

}

export default function RecipeDetails({ 
	state, 
	priceServices, 
	widthDevice, 
	setmodalShow,
	uslugiPrice
}) {

	const { asPath } = useRouter()
	const i = 2
	const { nameLink, pathLink } = state.mainPages[i]
	const { heading, price, fullDescription } = priceServices.fields

	

	//debugger;
	return (
		<>
			<Head>
				<title>Цена на { heading } — от { price } руб.</title>
				<meta name="description" 		content={`Честная цена на ${ heading } от ${ price } руб. Узнать подробнее можно  на нашем официальном сайте ритуальной службы XORONIM.moscow`} />
				<meta property="og:title"		content={`Цена на ${ heading } — от ${ price } ₽`} />
				<meta property="og:description"	content={`Честная цена на ${ heading } от ${ price } руб. Узнать подробнее можно  на нашем официальном сайте ритуальной службы XORONIM.moscow`} />
			</Head>

			<InnerHeader 
				h1={ heading }
			/>

			<Breadcrumbs
				pathLink={ asPath }
				scndLvl={true}
				scnNameLink={ nameLink }
				scnPathLink={ pathLink }
				nameLink={ heading }
			/>

			<Container fluid="xxl">
				<Row>
					<Col className="txt">
						{/* 
						{ asPath }
						{ slug }
						*/}

						{ 
							documentToReactComponents( fullDescription )
						}

					</Col>
				</Row>
			</Container>

			<BlockPrice 
				phoneNumber={ state.mainData.phoneNumber_1 }
				header={ state.indexPrice.h2 }
				priceUslug={ uslugiPrice }
				widthDevice={ widthDevice }
				setmodalShow={ setmodalShow }
			/>

		</>
	)
}