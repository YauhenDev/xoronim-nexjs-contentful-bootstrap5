import {Container, Row, Col } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import styles from './About.module.scss'

export default function About({ 
	description
}) {

	//debugger;
	return (
	<Container as="section" fluid="xxl">
		<Row>
			<Col 
				xl={ 12 }
				className="txt"
			>

				{ 
					documentToReactComponents( description )
				}

			</Col>
		</Row>
	</Container>
	)
}