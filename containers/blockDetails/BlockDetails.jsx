import {Container, Row, Col } from 'react-bootstrap'

import BlockDetailsItems from './BlockDetailsItems'

import {
	wrapper
} from './BlockDetails.module.scss'

export default function BlockDetails({ 
	phone,
	header,
	txt,
	chtoDelat
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ wrapper }>
		<Row>
			<Col xl={ 12 }>

				<h2>{ header }</h2>

				<p className="pb-4">{ txt }</p>

				<BlockDetailsItems
					phone={ phone }
					chtoDelat={ chtoDelat }
				/>

			</Col>
		</Row>
	</Container>
	)
}