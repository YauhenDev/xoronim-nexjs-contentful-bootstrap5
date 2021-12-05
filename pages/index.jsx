import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

import IndexHeader from '@containers/indexHeader/IndexHeader'

import BlockQuestions from '@containers/blockQuestions/BlockQuestions'
import BlockShowroom from '@containers/blockShowroom/BlockShowroom'
import IndexAbout from '@containers/indexAbout/IndexAbout'


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

		<Container fluid="xxl">
			<Row>
				<Col>
					1XORONIM.MOSCOW<br />
					2XORONIM.MOSCOW<br />
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

		<BlockQuestions />

		<BlockShowroom />

		<IndexAbout />

	</>
	)
}
