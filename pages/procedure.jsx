import Head from 'next/head'
import { useRouter } from 'next/router'

import InnerHeader from '@containers/innerHeader/InnerHeader'
import Breadcrumbs from '@components/dumb/breadcrum/Breadcrumbs'
import About from '@containers/about/About'
import BlockPrice from '@containers/blockPrice/BlockPrice'


import { createClient } from 'contentful'
export async function getStaticProps( ) {

	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const umerchelovekchtodelat = await client.getEntries({ 
		content_type: 'umer-chelovek-chto-delat'
	})

	//************ USLUGI */
	const prices = await client.getEntries({ 
		content_type: 'priceServices'
	})
	//************ USLUGI */

	return {
		props: {
			uslugiPrice: prices.items,		// Цены на услуги
			procedure: umerchelovekchtodelat.items		// Все услуги 
		}
		//revalidate: 10 //Обновлять раз в 10 секунд
	}
}

export default function Home({ 
	state,
	widthDevice,
	setmodalShow,
	uslugiPrice,
	procedure
} ) {

	const { asPath } = useRouter()
	const i = 1
	const { titleLink, seoTitle, seoDescription } = state.mainPages[i]

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

		test

		<BlockPrice 
			header={ state.indexPrice.h2 }
			priceUslug={ uslugiPrice }
			widthDevice={ widthDevice }
			setmodalShow={ setmodalShow }
		/>

	</>
	)
}
