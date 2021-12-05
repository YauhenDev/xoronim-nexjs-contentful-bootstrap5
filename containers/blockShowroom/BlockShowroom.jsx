import Image from 'next/image'
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
				<h2>Выставочный зал</h2>
				<p className="text-center pb-4">
					Вы можете посмотреть наш зал с широким ассортиментом<br />
					включая принадлежности собственного производства
				</p>
			</Col>
		</Row>
		<Row>
			<Col sm={ 12 } md={ 4 } lg={ 4 } xl={ 4 }>
				photo
			</Col>
			<Col sm={ 12 } md={ 4 } lg={ 4 } xl={ 4 }>
				photo
			</Col>
			<Col sm={ 12 } md={ 4 } lg={ 4 } xl={ 4 }>
				photo
			</Col>
		</Row>
	</Container>
	)
}