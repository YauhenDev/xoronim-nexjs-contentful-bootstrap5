import Link from 'next/link'

import { Container, Row, Col } from 'react-bootstrap'

export default function NotFound( ) {

	return (
	<Container fluid="xxl">
		<Row>
			<Col>
				<h1>404</h1>

				<Link href="/">
					<a>На главную</a>
				</Link>
			</Col>
		</Row>
	</Container>
	)
}
