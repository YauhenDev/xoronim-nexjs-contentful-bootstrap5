import Head from 'next/head'
import { useRouter } from 'next/router'
import {Container, Row, Col } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import InnerHeader from '@containers/innerHeader/InnerHeader'
import Breadcrumbs from '@components/dumb/breadcrum/Breadcrumbs'
import BlockPrice from '@containers/blockPrice/BlockPrice'

import { createClient } from 'contentful'
export async function getStaticProps( ) {

	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const about = await client.getEntries({ 
		content_type: 'about'
	})

	//************ USLUGI */
	const prices = await client.getEntries({ 
		content_type: 'priceServices'
	})
	//************ USLUGI */

	return {
		props: {
			uslugiPrice: prices.items,		// Цены на услуги
			aboutPage: about.items		// Все услуги 
		}
	}
}

export default function Home({ 
	state,
	widthDevice,
	setmodalShow,
	aboutPage,
	uslugiPrice
} ) {

	const privacyPolicy = aboutPage.filter(p => p.fields.privacy)
	const { description } = privacyPolicy[0].fields

	const { asPath } = useRouter()
	const { titleLink, seoTitle, seoDescription } = state.pagePrivacy

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
			nameLink={ state.pagePrivacy.nameLink }
		/>

		<Container as="section" fluid="xxl">
			<Row>
				<Col 
					xl={ 12 }
					className="txt"
				>

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
