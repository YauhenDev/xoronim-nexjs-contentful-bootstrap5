import { Container, Row, Col } from 'react-bootstrap'

import {
	content
} from './IndexHeader.module.scss'

export default function IndexHeaderContent({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ content }>
		<Row>
			<Col sm={ 12 } md={ 12 } lg={ 6 } >
				<h1>Ритуальные услуги в Москве<br />
				и Московской области</h1>
				<p>Берём на себя всю организацию и даём возможность
				достойно попрощаться.</p>
				<Row>
					<Col>
						Приезд консультанта
						в течении часа круглосуточно
					</Col>
					<Col>
						Более 3000 
						проведенных похорон
					</Col>
					<Col>
						Работа 
						по договору
					</Col>
				</Row>
			</Col>
			<Col>
			</Col>
		</Row>
	</Container>
	)
}