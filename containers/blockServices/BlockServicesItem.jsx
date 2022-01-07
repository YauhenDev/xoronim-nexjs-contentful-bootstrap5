import Link from 'next/link'
import { Col, Card } from 'react-bootstrap'

import ListTypeSVG from '@components/ui/ico/ListTypeSVG'
import styles from './BlockServices.module.scss'

export default function BlockServicesItem({ 
	cat,
	arr
}) {

	//debugger;
	return (
	<Col className={ styles.col }>
		<Card 
			className={`${ styles.card } h-100`}
		>
			<Card.Header 
				as="h3"
				className={ styles.header } 
			>
				{ cat }
			</Card.Header>
			<Card.Body>
				<Card.Text 
					className={ styles.text } 
					as="div"
				>
					<ul>
						{ arr.map(p => (
							<li key={ p.sys.id }>
								<ListTypeSVG />
								<Link
									href={`/services/${ p.fields.slug }`}
								>
									<a 
										title={`Ритуальная услуга: ${ p.fields.serviceName }`}
										className={`${ styles.link } bs-0`}
									>
										{ p.fields.serviceName }
									</a>
									
								</Link>
							</li>
						))}
					</ul>
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>
	)
}