import { useState } from 'react'
import {Container, Row, Col } from 'react-bootstrap'

import IndexTroubleCard from './IndexTroubleCard'

import styles from './IndexTrouble.module.scss'

export default function IndexTrouble({ 
	indexTrouble,
	widthDevice
}) {

	// Определение телефона по сетке bootstrap 5
	// Подменяем блок цен на слайдер
	const [isMobile, setIsMobile] = useState(widthDevice);
	const ismobile = widthDevice < 992;
	if (ismobile !== isMobile) setIsMobile(ismobile);

	//debugger;
	return (
	<Container fluid className={ styles.block }>
		<Container fluid="xxl" className={ styles.wrapper }>
			<Row>
				<Col xl={ 12 }>
					<h2>
						{ indexTrouble.h2 }
					</h2>
				</Col>
			</Row>
			<Row className={`row row-cols-2 row-cols-lg-4 ${isMobile ? "g-2" : "g-4" }`}>
				{ indexTrouble.indexTroubleBlock.map( (p, i) => (
					<IndexTroubleCard 
						key={ i }
						h={ p.h }
						txt={ p.txt }
					/>
				))}
			</Row>
		</Container>
	</Container>
	)
}