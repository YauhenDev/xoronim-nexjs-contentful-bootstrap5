import {Container, Row, Col } from 'react-bootstrap'

import IndexTroubleCard from './IndexTroubleCard'

import {
	block,
	wrapper
} from './IndexTrouble.module.scss'

export default function IndexTrouble({ 
	indexTrouble,
	title
}) {

	//debugger;
	return (
	<Container fluid className={ block }>
		<Container fluid="xxl" className={ wrapper }>
			<Row>
				<Col xl={ 12 }>
					<h2>
						{ title }
					</h2>
				</Col>
			</Row>
			<Row className="row row-cols-2 row-cols-lg-4 g-4">
				{ indexTrouble.map( (p, i) => (
					<IndexTroubleCard 
						key={ i }
						h={ p.h }
						txt={ p.txt }
					/>
				))}
			</Row>
		</Container>
	</Container>
	)
}