import { Col, Card } from 'react-bootstrap'
import parse from 'html-react-parser'

import {
	title,
	text,
	footer,
	cardTrouble
} from './IndexTrouble.module.scss'

export default function IndexTroubleCard({ 
	h,
	txt
}) {

	//debugger;
	return (
	<>
		<Col>
			<Card className={`${ cardTrouble } h-100`}>
				<Card.Body>
					<Card.Title className={ title }>
						{ h }
					</Card.Title>
					<Card.Text className={ text }>

					</Card.Text>
				</Card.Body>
				<Card.Footer className={ footer }>
					<p>
						{parse(txt)}
					</p>
				</Card.Footer>
			</Card>
		</Col>
	</>
	)
}