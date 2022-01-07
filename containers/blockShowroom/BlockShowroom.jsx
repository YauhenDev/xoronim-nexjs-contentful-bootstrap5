import Image from 'next/image'
import {Container, Row, Col } from 'react-bootstrap'
import parse from 'html-react-parser'

import styles from './BlockShowroom.module.scss'

export default function BlockShowroom({ 
	header,
	txt,
	namePhoto
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ styles.wrapper }>
		<Row>
			<Col xl={ 12 }>
				<h2>
					{ header }
				</h2>
				<p className="text-center pb-4">
					{parse( txt )}
				</p>
			</Col>
		</Row>
		<Row className="g-2">
			{ namePhoto.map( (p, i) => (
				<Col 
					key={ i } 
					xs={ 6 }   
					md={ 3 } 
				>
					<Image 
						src={`/assets/img/photo/${p.img}`}
						layout="responsive"
						loading="lazy"
						width={ 450 }
						height={ 500 }
					/>
				</Col> 
			))}
		</Row>
	</Container>
	)
}