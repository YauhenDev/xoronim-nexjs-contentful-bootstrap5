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
	const services = await client.getEntries({
		content_type: 'services'
	})

	const paths = services.items.map(item => {
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
		content_type: 'services',
		'fields.slug': params.slug
	})

	//************ USLUGI */
	const prices = await client.getEntries({ 
		content_type: 'priceServices'
	})
	//************ USLUGI */

	return {
		props: {
			services: items[0],
			uslugiPrice: prices.items	//************ USLUGI  */
			
		}
	}

}

export default function RecipeDetails({ 
	state, 
	services, 
	widthDevice, 
	setmodalShow,
	uslugiPrice
}) {

	const { asPath } = useRouter()
	const i = 2
	const { nameLink, pathLink } = state.mainPages[i]
	const { serviceName, slug, description } = services.fields

	//debugger;
	return (
		<>
			<Head>
				<title>{serviceName} в Москве и Московской области</title>
				<meta name="description" 		content={`Заказать услугу "${serviceName}" в Москве. Опытные консультанты раскажут подробности про "${serviceName}"`} />
				<meta property="og:title"		content={`${serviceName} в Москве и Московской области`} />
				<meta property="og:description"	content={`Заказать услугу "${serviceName}" в Москве. Опытные консультанты раскажут подробности про "${serviceName}"`} />
			</Head>

			<InnerHeader 
				h1={ serviceName }
			/>

			<Breadcrumbs
				pathLink={ asPath }
				scndLvl={true}
				scnNameLink={ nameLink }
				scnPathLink={ pathLink }
				nameLink={serviceName}
			/>

			<Container fluid="xxl">
				<Row>
					<Col>

						{ asPath }
						<br/>
						{ slug }

						<br />

						{ 
							documentToReactComponents( description )
						}

					</Col>
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