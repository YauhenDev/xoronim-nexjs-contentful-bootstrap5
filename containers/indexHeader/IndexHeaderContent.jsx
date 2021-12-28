import { Container, Row, Col } from 'react-bootstrap'
import parse from 'html-react-parser'

import {
	content,
	benefits,
	xl,
	agent
} from './IndexHeader.module.scss'

export default function IndexHeaderContent({ 
	mainData,
	indexHeader
}) {

	const { h1, p } = indexHeader

	//debugger;
	return (
	<Container fluid="xxl" className={ content }>
		<Row>
			<Col sm={ 12 } md={ 12 } lg={ 7 } >
				<h1>
					{parse(h1)}
				</h1>
				<p className={ xl }>
					{parse(p)}
				</p>
				<Row className={ benefits }>
					{ indexHeader.indexHeaderBlock.map( (p, i) => (
						<Col key={ i }>
							{parse(p.block)}
						</Col> 
					))}
				</Row>
				<Row>
					<Col className={ agent }>
						<a href={`tel:+${ mainData.phoneNumber_1 }`} className="btn btn-primary">
							Консультация
						</a>
					</Col>
				</Row>
			</Col>
			<Col>
				
			</Col>
		</Row>
	</Container>
	)
}