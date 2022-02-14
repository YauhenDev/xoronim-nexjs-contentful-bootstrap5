import Image from 'next/image'
import { Card } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import styles from './Agents.module.scss'

export default function Agent({ 
	name,
	img,
	description
}) {

	//debugger;
	return (
	<Card 
		className={`${styles.cardPerson} h-100`}
	>
		<Image 
			src={ img }
			alt={ name }
			width={500}
			height={500}
			className="card-img-top"
		/>

		<Card.Body>
			<Card.Text 
				className={ styles.text } 
				as="div"
			>
				<h3>
					{ name }
				</h3>
				{ 
					documentToReactComponents( description )
				}
				
			</Card.Text>
		</Card.Body>
	</Card>
	)
}