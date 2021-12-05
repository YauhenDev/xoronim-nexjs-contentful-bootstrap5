import {Container, Row, Col } from 'react-bootstrap'

import {
	wrapper
} from './IndexAbout.module.scss'

export default function IndexAbout({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ wrapper }>
		<Row>
			<Col xl={ 12 }>
				IndexAbout
			</Col>
		</Row>
	</Container>
	)
}