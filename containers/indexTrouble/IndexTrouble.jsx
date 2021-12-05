import {Container, Row, Col } from 'react-bootstrap'

import {
	block,
	wrapper
} from './IndexTrouble.module.scss'

export default function IndexTrouble({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid className={ block }>
		<Container fluid="xxl" className={ wrapper }>
			<Row>
				<Col xl={ 12 }>
					<h2>Что делать, если случилась беда?</h2>
					IndexTrouble
				</Col>
			</Row>
		</Container>
	</Container>
	)
}