import Image from 'next/image'
import {Container, Row, Col, Button } from 'react-bootstrap'

import styles from './BlockQuestions.module.scss'

export default function BlockQuestions({ 
	header,
	txt,
	setmodalShow
}) {

	//debugger;
	return (
	<Container as="section" fluid="xxl" className={ styles.wrapper }>
		<Row className={ styles.row }>
			<Col 
				xs={{span: 12, order: 3}} 
				sm={{span: 6, order: 2}} 
				md={{span: 5, order: 1 }} 
				lg={ 4 } 
				xl={ 4 } 
				className={ styles.angelblock }
			>
				<div className={ styles.angel }>
					<Image 
						src="/assets/img/angelstatue.png"
						layout="fixed"
						width="410"
						height="590"
						loading="lazy"
					/>
				</div>
			</Col>
			<Col 
				xs={{span: 12, order: 2}} 
				sm={{span: 6, order: 3}} 
				md={{span: 7, order: 2 }} 
				lg={ 4 } 
				xl={ 4 } 
				className={ styles.text }
			>

				{ txt }
			
			</Col>
			<Col 
				xs={{span: 12, order: 1}} 
				sm={{span: 12, order: 1}} 
				md={{span: 12, order: 3 }} 
				lg={ 4 } 
				xl={ 4 } 
				className={ styles.contact }
			>
				
				<h2>
					{ header }
				</h2>

				<Button 
					//href={`tel:+${ mainData.phoneNumber_1 }`} 
					variant="primary" 
					onClick={() => setmodalShow(true)}
				>
					Заказать консультацию
				</Button>

			</Col>
		</Row>
	</Container>
	)
}