import { Container, Row, Col } from 'react-bootstrap'

import {
	content,
	benefits,
	xl
} from './IndexHeader.module.scss'

export default function IndexHeaderContent({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ content }>
		<Row>
			<Col sm={ 12 } md={ 12 } lg={ 7 } >
				<h1>Ритуальные услуги в Москве<br />
				и Московской области</h1>
				<p>Берём на себя всю организацию и даём возможность <br className={ xl } />
				достойно попрощаться.</p>

				<Row className={ benefits }>
					<Col>
						Приезд консультанта
						в течении часа <strong>круглосуточно</strong>
					</Col>
					<Col>
						Более <strong>3000 </strong>
						проведенных похорон
					</Col>
					<Col>
						Работа 
						по <strong>договору</strong>
					</Col>
				</Row>
			</Col>
			<Col>
			</Col>
		</Row>
	</Container>
	)
}