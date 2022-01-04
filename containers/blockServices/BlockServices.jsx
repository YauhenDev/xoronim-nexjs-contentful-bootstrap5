import {Container, Row, Col } from 'react-bootstrap'

import BlockServicesItems from './BlockServicesItems'

import {
	block,
	wrapper
} from './BlockServices.module.scss'

export default function BlockServices({ 
	header,
	allServices
}) {

	//debugger;
	return (
	<Container fluid className={ block }>
		<Container fluid="xxl" className={ wrapper }>
			<Row>
				<Col xl={ 12 }>
					<h2>{ header }</h2>
				</Col>
			</Row>
			
			<BlockServicesItems 
				allServices={ allServices }
			/>

		</Container>
	</Container>
	)
}