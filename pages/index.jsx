import Head from 'next/head'

import IndexHeader from '@containers/indexHeader/IndexHeader'

import BlockPrice from '@containers/blockPrice/BlockPrice'
import BlockDetails from '@containers/blockDetails/BlockDetails'
import BlockServices from '@containers/blockServices/BlockServices'
import BlockQuestions from '@containers/blockQuestions/BlockQuestions'
import BlockShowroom from '@containers/blockShowroom/BlockShowroom'
import IndexAbout from '@containers/indexAbout/IndexAbout'
import IndexTrouble from '@containers/indexTrouble/IndexTrouble'


export default function Home({ state, widthDevice } ) {

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
		/>

		<IndexTrouble 
			title={ state.indexBlock.Trouble }
			indexTrouble={ state.indexTrouble }
		/>

		<BlockPrice 
			phoneNumber={ state.mainData.phoneNumber_1 }
			header={ state.indexBlock.Price }
			allPrice={ state.allPrice }
			widthDevice={ widthDevice }
		/>

		<BlockDetails 
		
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
