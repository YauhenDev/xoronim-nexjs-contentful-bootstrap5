import NumberFormat from 'react-number-format'

import { Card } from 'react-bootstrap'

import {
	cardPrice,
	header,
	text,
	footer
} from './BlockPrice.module.scss'

export default function CardPrice({ 
	phoneNumber,
	title,
	txt,
	price
}) {

	return (
	<Card 
		className={ cardPrice }
		itemScope 
		itemType="http://schema.org/Product"
	>
		<Card.Header 
			className={ header } 
			itemProp="name"
		>

			{ title }

		</Card.Header>
		<Card.Body>
			<Card.Text 
				className={ text } 
				itemProp="description"
			>

				{ txt }

			</Card.Text>
		</Card.Body>
		<Card.Footer 
			className={ footer } 
			itemProp="offers" 
			itemScope 
			itemType="http://schema.org/AggregateOffer"
		>
			
			<NumberFormat 
				value={ price }
				//format="## ###"
				displayType="text"
				type="text"
				thousandsGroupStyle="thousand"
				thousandSeparator=" "
				suffix=" ₽"
				
				itemProp="price"
			/>
			<meta 
				itemProp="priceCurrency" 
				content="RUB" 
			/>
			<link 
				itemProp="availability" 
				href="http://schema.org/InStock" 
			/>
			{/* <span 
				itemProp="priceCurrency" 
				content="RUB"
			> ₽</span> */}

			<a 
				href={`tel:+${ phoneNumber }`} 
				className="btn btn-warning"
				title={`Заказать услугу — ${ title } `}
			>
				Заказать услугу
			</a>
			{/* 
			<span itemProp="lowPrice">600</span> 
			до 
			<span itemProp="highPrice">1000</span> 
			*/}
		</Card.Footer>
	</Card>
	)
}

