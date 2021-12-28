import Image from 'next/image'
import NumberFormat from 'react-number-format'

import {Container, Row, Col, Card } from 'react-bootstrap'

import {
	block,
	cloud,
	wrapper,
	angel,
	prices,
	cardPrice,
	title,
	text,
	footer
} from './BlockPrice.module.scss'

export default function BlockPrice({ 
	header,
	allPrice
}) {

	//debugger;
	return (
	<Container fluid className={ block }>
		<Container fluid className={`${ cloud } p-0 `}>
			<Container fluid className={`${ angel } p-0`}>
				<Image 
					src="/assets/img/price/statue.png"
					layout="fixed"
					loading="lazy"
					width={ 665 }
					height={ 730 }
				/>
			</Container>
			<Container fluid="xxl" className={ wrapper }>
				<Row>
					<Col xl={ 12 }>
						<h2>{ header }</h2>
					</Col>
				</Row>
				<Row className="row row-cols-2 row-cols-lg-4 g-4">
					{ allPrice.map( (p, i) => (
						<Col key={ i } className={ prices }>
							
							<Card className={`${ cardPrice } `} itemscope itemtype="http://schema.org/Product">
								<Card.Header className={ title } itemprop="name">

									{ p.title }

								</Card.Header>
								<Card.Body>
									<Card.Text className={ text } itemprop="description">

										{ p.txt }

									</Card.Text>
								</Card.Body>
								<Card.Footer className={ footer } itemprop="offers" itemscope itemtype="http://schema.org/AggregateOffer">

									<meta itemprop="priceCurrency" content="RUB" />
									<link itemprop="availability" href="http://schema.org/InStock" />
									
									<NumberFormat 
										value={ p.price }
										thousandsGroupStyle="thousand"
										thousandSeparator=" "
										//format="## ###"
										displayType="text"
										type="text"
										itemprop="price"
										
									/> ₽

									{/* 
									<span itemprop="lowPrice">600</span> 
									до 
									<span itemprop="highPrice">1000</span> 
									*/}

								</Card.Footer>
							</Card>

						</Col>
					))}
				</Row>
			</Container>
		</Container>
	</Container>
	)
}

