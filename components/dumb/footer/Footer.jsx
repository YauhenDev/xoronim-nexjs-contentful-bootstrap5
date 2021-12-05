import {Container, Row, Col } from 'react-bootstrap'

import {
	block,
	wrapper
} from './Footer.module.scss'

export default function Footer({ 
	mainPages
}) {

	//debugger;
	return (
	<Container fluid className={ block }>
		<Container fluid="xxl" className={ wrapper }>
			<Row>
				<Col xl={ 3 }>
					logo
				</Col>
				<Col xl={ 3 }>
					footer
				</Col>
				<Col xl={ 3 }>
					footer
				</Col>
				<Col xl={ 3 }>
					footer
				</Col>
			</Row>
		</Container>
	</Container>
	)
}