import Link from 'next/link'
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home({ state } ) {

	const i = 2
	const { seoTitle, seoDescription } = state.mainPages[i]

	return (
	<>
		<Head>
			<title>{ seoTitle }</title>
			<meta name="description" 		content={ seoDescription } />
			<meta property="og:title"		content={ seoTitle } />
			<meta property="og:description"	content={ seoDescription } />
		</Head>

		<Container fluid="xxl">
			<Row>
				<Col>
					Services
					<Link href="/services/1">
						<a>1</a>
					</Link>
				</Col>
			</Row>
		</Container>
	</>
	)
}
