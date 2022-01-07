import {Container, Row, Col } from 'react-bootstrap'

import styles from './IndexAbout.module.scss'

export default function IndexAbout({ 
	header,
	txt
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ styles.wrapper }>
		<Row>
			<Col xl={ 12 }>
				<h2>
					{ header }
				</h2>
			</Col>
		</Row>
		<Row>
			<Col className={ styles.text }>
				{ txt.map( (p, i) => (
					<p key={ i } >
						{ p.p}
					</p>
				))}
			</Col>
		</Row>
	</Container>
	)
}