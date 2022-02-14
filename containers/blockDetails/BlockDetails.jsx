import {Container, Row, Col } from 'react-bootstrap'

import BlockDetailsItems from './BlockDetailsItems'

import styles from './BlockDetails.module.scss'

export default function BlockDetails({ 
	phone,
	header,
	txt,
	txt2,
	chtoDelat
}) {

	//debugger;
	return (
	<Container as="section" fluid="xxl" className={ styles.wrapper }>
		<Row>
			<Col xl={ 12 }>

				<h2>{ header }</h2>

				<p className="pb-2">
					{ txt }
				</p>
				<p className="pb-2">
					{ txt2 }
				</p>

				<BlockDetailsItems
					phone={ phone }
					chtoDelat={ chtoDelat }
				/>

			</Col>
		</Row>
	</Container>
	)
}