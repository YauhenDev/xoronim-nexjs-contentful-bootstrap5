import {Container, Row, Col } from 'react-bootstrap'

import {
	block,
	wrapper
} from './BlockServices.module.scss'

export default function BlockServices({ 
	mainData
}) {

	//debugger;
	return (
		<Container fluid className={ block }>
		<Container fluid="xxl" className={ wrapper }>
			<Row>
				<Col xl={ 12 }>
					<h2>Ритуальные услуги</h2>
					BlockServices
				</Col>
			</Row>
		</Container>
	</Container>
	)
}