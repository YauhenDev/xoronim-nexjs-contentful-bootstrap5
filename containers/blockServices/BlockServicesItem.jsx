import Link from 'next/link'
import { Col, Card } from 'react-bootstrap'

import ListTypeSVG from '@components/ui/ico/ListTypeSVG'
import {
	col,
	card,
	header,
	text,
	link
} from './BlockServices.module.scss'

export default function BlockServicesItem({ 
	cat,
	arr
}) {

	//debugger;
	return (
	<Col className={ col }>
		<Card 
			className={`${ card } h-100`}
		>
			<Card.Header 
				as="h3"
				className={ header } 
			>
				{ cat }
			</Card.Header>
			<Card.Body>
				<Card.Text 
					className={ text } 
					itemProp="description"
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
										className={`${ link } bs-0`}
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