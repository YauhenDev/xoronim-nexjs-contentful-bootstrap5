import {Container, Row, Col } from 'react-bootstrap'

import IndexTroubleCard from './IndexTroubleCard'

import {
	block,
	wrapper
} from './IndexTrouble.module.scss'

export default function IndexTrouble({ 
	indexTrouble
}) {

	//debugger;
	return (
	<Container fluid className={ block }>
		<Container fluid="xxl" className={ wrapper }>
			<Row>
				<Col xl={ 12 }>
					<h2>
						{ indexTrouble.h2 }
					</h2>
				</Col>
			</Row>
			<Row className="row row-cols-2 row-cols-lg-4 g-4">
				{ indexTrouble.indexTroubleBlock.map( (p, i) => (
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