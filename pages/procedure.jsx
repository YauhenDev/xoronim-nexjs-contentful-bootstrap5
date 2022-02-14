import Head from 'next/head'
import { useRouter } from 'next/router'

import InnerHeader from '@containers/innerHeader/InnerHeader'
import Breadcrumbs from '@components/dumb/breadcrum/Breadcrumbs'
import BlockDetails from '@containers/blockDetails/BlockDetails'
import BlockPrice from '@containers/blockPrice/BlockPrice'


import { createClient } from 'contentful'
export async function getStaticProps( ) {

	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const details = await client.getEntries({ 
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
			chtoDelat: details.items		// Все услуги 
		}
	}
}

export default function Home({ 
	state,
	widthDevice,
	setmodalShow,
	uslugiPrice,
	chtoDelat
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

		<BlockDetails 
			phone={ state.mainData.phoneNumber_1 }
			header={ state.indexDetails.h2 }
			txt={ state.indexDetails.p }
			txt2={ state.indexDetails.p2 }
			chtoDelat={ chtoDelat }
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
