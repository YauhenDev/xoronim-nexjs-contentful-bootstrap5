import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

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

	return (
	<>
		<Head>
			<title>{ seoTitle }</title>
			<meta name="description" 		content={ seoDescription } />
			<meta property="og:title"		content={ seoTitle } />
			<meta property="og:description"	content={ seoDescription } />
		</Head>

		<IndexHeader 
		
		/>

		<IndexTrouble 
		
		/>

		<BlockPrice 
		
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

		<Container fluid="xxl">
			<Row>
				<Col>
					<br /><br />
					test fix navbar scroll<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					XORONIM.MOSCOW<br />
					

				</Col>
			</Row>
		</Container>

	</>
	)
}
