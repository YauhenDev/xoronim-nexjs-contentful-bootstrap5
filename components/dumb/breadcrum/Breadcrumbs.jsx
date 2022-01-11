import Link from 'next/link'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

import styles from './Breadcrumbs.module.scss'

export default function Breadcrumbs({ 
	pathLink, 
	nameLink, 
	scndLvl, 
	scnNameLink, 
	scnPathLink 
}) {

	function SeconLvl() {
	return (
	<Breadcrumb.Item linkAs="span">
		<Link href={ scnPathLink }>
			<a className="bs-0">
				{ scnNameLink }
			</a>
		</Link>
	</Breadcrumb.Item>
	)}

	return (
	<Container fluid="xxl">
		<Row className={`align-items-center ${ styles.row }`}>
			<Col className="col-12 order-first">

				<Breadcrumb>

					<Breadcrumb.Item linkAs="span" className={`bs-0 ${ styles.home }`}>
						<Link href="/">
							<a 
								className="bs-0"
								title="Ритуальная служба Москвы"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path data-fill="secondary" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
								</svg>
							</a>
						</Link>
					</Breadcrumb.Item>

					{scndLvl ? <SeconLvl />  : ''}

					<Breadcrumb.Item linkAs="span" className={`text-truncate ${styles.active}`}>
						<Link href={ pathLink }>
							<a 
								className="bs-0"
								title={ nameLink }
							>
								{ nameLink }
							</a>
						</Link>
					</Breadcrumb.Item>

				</Breadcrumb>

			</Col>
		</Row>
	</Container>
	)
}