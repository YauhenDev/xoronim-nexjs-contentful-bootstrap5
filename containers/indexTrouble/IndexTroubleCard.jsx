import { Col, Card } from 'react-bootstrap'
import parse from 'html-react-parser'

import styles from './IndexTrouble.module.scss'

export default function IndexTroubleCard({ 
	h,
	txt
}) {

	//debugger;
	return (
	<>
		<Col>
			<Card className={`${ styles.cardTrouble } h-100`}>
				<Card.Body>
					<Card.Title className={ styles.title }>
						{ h }
					</Card.Title>
					<Card.Text className={ styles.text }>

					</Card.Text>
				</Card.Body>
				<Card.Footer className={ styles.footer }>
					<p>
						{parse(txt)}
					</p>
				</Card.Footer>
			</Card>
		</Col>
	</>
	)
}