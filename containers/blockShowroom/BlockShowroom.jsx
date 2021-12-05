import {Container, Row, Col } from 'react-bootstrap'

import {
	wrapper
} from './BlockShowroom.module.scss'

export default function BlockShowroom({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ wrapper }>
		<Row>
			<Col xl={ 12 }>
				BlockShowroom
			</Col>
		</Row>
	</Container>
	)
}