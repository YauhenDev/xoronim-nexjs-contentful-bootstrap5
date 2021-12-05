import Image from 'next/image'
import {Container, Row, Col } from 'react-bootstrap'

import {
	wrapper,
	row,
	txt,
	angelblock,
	angel,
	contact
} from './BlockQuestions.module.scss'

export default function BlockQuestions({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ wrapper }>
		<Row className={ row }>
			<Col xs={{span: 12, order: 3}} sm={{span: 6, order: 2}} md={{span: 5, order: 1 }} lg={ 4 } xl={ 4 } className={ angelblock }>
				
				<div className={ angel }>
					<Image 
						src="/assets/img/angelstatue.png"
						layout="fixed"
						width="410"
						height="590"
						loading="lazy"
					/>
				</div>

			</Col>
			<Col xs={{span: 12, order: 2}} sm={{span: 6, order: 3}} md={{span: 7, order: 2 }} lg={ 4 } xl={ 4 } className={ txt }>

				Если у вас произошла трагедия и вы не знаете как организовать похороны и куда обращаться позвоните нам или вызовите ритуального агента и мы всё сделаем за вас.
			
			</Col>
			<Col xs={{span: 12, order: 1}} sm={{span: 12, order: 1}} md={{span: 12, order: 3 }} lg={ 4 } xl={ 4 } className={ contact }>
				
				<h2>Остались вопросы?</h2>

			</Col>
		</Row>
	</Container>
	)
}