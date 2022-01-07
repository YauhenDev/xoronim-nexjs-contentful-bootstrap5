import {Container, Row, Col } from 'react-bootstrap'

import BlockServicesItems from './BlockServicesItems'

import styles from './BlockServices.module.scss'

export default function BlockServices({ 
	header,
	allServices
}) {

	//debugger;
	return (
	<Container fluid className={ styles.block }>
		<Container fluid="xxl" className={ styles.wrapper }>
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