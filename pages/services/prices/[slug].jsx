import { useRouter } from 'next/router'
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import {Container, Row, Col } from 'react-bootstrap'

//import Breadcrumbs from '@components/smart/breadcrum/Breadcrumbs'
//import CardProduct from '@components/product/CardProduct'
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
		// props: {
		// 	priceUslug: priceUslug.items
		// }
	}

}

export async function getStaticProps({ params }) {

	const { items } = await client.getEntries({
		content_type: 'priceServices',
		'fields.slug': params.slug
	})

	return {
		props: {
			priceServices: items[0]
		}
	}

}

export default function RecipeDetails({ state, priceServices, widthDevice, setmodalShow }) {

	const { asPath } = useRouter()
	const { heading, price, fullDescription } = priceServices.fields

	//debugger;
	return (
		<>
			<Head>
				<title></title>
				<meta name="description" 		content="" />
				<meta property="og:title"		content="" />
				<meta property="og:description"	content="" />
			</Head>


			<Container fluid="xxl">
				<Row>
					<Col>
						
						<h1>{ heading }</h1> 

						{ asPath }

						<br />
						{ price }

						{ 
							documentToReactComponents( fullDescription )
						}

					</Col>
				</Row>
			</Container>

			{/* <BlockPrice 
				phoneNumber={ state.mainData.phoneNumber_1 }
				header={ state.indexPrice.h2 }
				//priceUslug={ priceUslug }
				widthDevice={ widthDevice }
				setmodalShow={ setmodalShow }
			/> */}

		</>
	)
}