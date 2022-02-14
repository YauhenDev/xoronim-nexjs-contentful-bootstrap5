import {Container, Row, Col } from 'react-bootstrap'

import styles from './InnerHeader.module.scss'

export default function InnerHeader({ 
	h1
}) {

	//debugger;
	return (
	<Container as="section" fluid className={ styles.block }>
		<Container fluid="xxl">
			<Row className={`align-items-center ${ styles.row }`}>
				<Col>
					<h1>
						{ h1 }
					</h1>
				</Col>
			</Row>
		</Container>
	</Container>
	)
}