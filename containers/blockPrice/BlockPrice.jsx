import {Container, Row, Col } from 'react-bootstrap'

import {
	block,
	wrapper
} from './BlockPrice.module.scss'

export default function BlockPrice({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid className={ block }>
		<Container fluid="xxl" className={ wrapper }>
			<Row>
				<Col xl={ 12 }>
					<h2>Стоимость услуг</h2>
					BlockPrice
				</Col>
			</Row>
		</Container>
	</Container>
	)
}