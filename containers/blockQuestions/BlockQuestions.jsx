import {Container, Row, Col } from 'react-bootstrap'

import {
	wrapper
} from './BlockQuestions.module.scss'

export default function BlockQuestions({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ wrapper }>
		<Row>
			<Col xl={ 12 }>
				BlockQuestions
			</Col>
		</Row>
	</Container>
	)
}