import {Container, Row, Col } from 'react-bootstrap'

import {
	wrapper
} from './BlockDetails.module.scss'

export default function BlockDetails({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ wrapper }>
		<Row>
			<Col xl={ 12 }>
				<h2>Детали</h2>
				BlockDetails
			</Col>
		</Row>
	</Container>
	)
}