import Link from 'next/link'
import NumberFormat from 'react-number-format'
import { Button, Card } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import styles from './BlockPrice.module.scss'

export default function CardPrice({ 
	url,
	title,
	txt,
	low,
	price,
	setmodalShow
}) {

	return (
	<Card 
		className={ styles.cardPrice }
		itemScope 
		itemType="http://schema.org/Product"
	>
		<Card.Header 
			as="h3"
			className={ styles.header } 
			itemProp="name"
		>

			{ title }

		</Card.Header>
		<Card.Body>
			<Card.Text 
				className={ styles.text } 
				itemProp="description"
				as="div"
			>
				{ 
					documentToReactComponents( txt )
				}
			</Card.Text>
			<p className="pt-1 text-center">
				<Link 
					href={`/services/prices/${url}`}
				>
					<a 
						title={`Узнать подробнее про услугу — ${ title }`}
					>
						подробнее ›
					</a>
				</Link>
			</p>
		</Card.Body>
		<Card.Footer 
			className={ styles.footer } 
			itemProp="offers" 
			itemScope 
			itemType="http://schema.org/AggregateOffer"
		>
			<span>
				{ low }
			</span>
			<NumberFormat 
				value={ price }					// значение
				//format="## ###"				// отключаем маску
				displayType="text"				// отображать как <span>
				type="text"						// текстовое
				thousandsGroupStyle="thousand"	// деление по тысячам
				thousandSeparator=" "			// разделитель  между тысячами
				suffix=" ₽"						// установаить после значения
				
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
			
			<br />
			<Button 
				//className="btn btn-warning"
				variant="warning"
				title={`Заказать услугу — ${ title } `}
				onClick={() => setmodalShow(true)}
			>
				Заказать услугу
			</Button>
			{/* 
			<span itemProp="lowPrice">600</span> 
			до 
			<span itemProp="highPrice">1000</span> 
			*/}
		</Card.Footer>
	</Card>
	)
}