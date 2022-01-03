import Head from 'next/head'

import IndexHeader from '@containers/indexHeader/IndexHeader'

import BlockPrice from '@containers/blockPrice/BlockPrice'
import BlockDetails from '@containers/blockDetails/BlockDetails'
import BlockServices from '@containers/blockServices/BlockServices'
import BlockQuestions from '@containers/blockQuestions/BlockQuestions'
import BlockShowroom from '@containers/blockShowroom/BlockShowroom'
import IndexAbout from '@containers/indexAbout/IndexAbout'
import IndexTrouble from '@containers/indexTrouble/IndexTrouble'

import { createClient } from 'contentful'
export async function getStaticProps( ) {

	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const details = await client.getEntries({ 
		content_type: 'umer-chelovek-chto-delat'
	})

	const prices = await client.getEntries({ 
		content_type: 'priceServices'
	})

	return {
		props: {
			chtoDelat: details.items,
			priceUslug: prices.items
		}
		//revalidate: 10 //Обновлять раз в 10 секунд
	}
}

export default function Home({ 
	state,
	widthDevice,
	setmodalShow,
	priceUslug,
	chtoDelat
 }) {

	const i = 0
	const { seoTitle, seoDescription } = state.mainPages[i]

	//debugger;
	return (
	<>
		<Head>
			<title>{ seoTitle }</title>
			<meta name="description" 		content={ seoDescription } />
			<meta property="og:title"		content={ seoTitle } />
			<meta property="og:description"	content={ seoDescription } />
		</Head>

		<IndexHeader 
			mainData={ state.mainData }
			indexHeader={ state.indexHeader }
			setmodalShow={ setmodalShow }
		/>

		<IndexTrouble 
			indexTrouble={ state.indexTrouble }
		/>

		<BlockPrice 
			phoneNumber={ state.mainData.phoneNumber_1 }
			header={ state.indexPrice.h2 }
			priceUslug={ priceUslug }
			widthDevice={ widthDevice }
			setmodalShow={ setmodalShow }
		/>

		<BlockDetails 
			phone={ state.mainData.phoneNumber_1 }
			header={ state.indexDetails.h2 }
			txt={ state.indexDetails.p }
			chtoDelat={ chtoDelat }
		/>

		<BlockServices 
		
		/>

		<BlockQuestions 
		
		/>

		<BlockShowroom 
		
		/>

		<IndexAbout 
		
		/>

	</>
	)
}
