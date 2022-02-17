import Image from 'next/image'
import { Card } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import styles from './Agents.module.scss'

export default function Agent({ 
	name,
	img,
	description,
	work
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
			className={`card-img-top ${work ? '' : `${ styles.whiteblack }`} `}
		/>

		<Card.Body className={ styles.body }>
			<Card.Text 
				className={`${ styles.text } ${work ? '' : `${ styles.dontWork }`}`}
				as="div"
			>
				<h3>
					{ name }
				</h3>
				{ 
					documentToReactComponents( description )
				}

				{work ? 
					''  
				: 
					<span className={ styles.label }>
						не работает
					</span>
				}
				
			</Card.Text>
		</Card.Body>
	</Card>
	)
}