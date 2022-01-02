import { Container, Row, Col, Button } from 'react-bootstrap'
import parse from 'html-react-parser'

import {
	content,
	benefits,
	xl,
	agent
} from './IndexHeader.module.scss'

export default function IndexHeaderContent({ 
	setmodalShow,
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
						<Button 
							//href={`tel:+${ mainData.phoneNumber_1 }`} 
							variant="primary" 
							onClick={() => setmodalShow(true)}
						>
							Консультация
						</Button>
					</Col>
				</Row>
			</Col>
			<Col>
				
			</Col>
		</Row>
	</Container>
	)
}