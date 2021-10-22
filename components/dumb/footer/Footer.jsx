import Link from 'next/link'

import NumberFormat from 'react-number-format'

import { Container, Row, Col } from 'react-bootstrap'
import LinkLogo from '@components/ui/logo/LinkLogo'

import { 
	bg,
	bigLink,
	bottom,
	light
} from './Footer.module.scss'


export default function Footer({
	mainData,
	mainPages
}) {
	//debugger;
	return (
	<Container fluid className={ bg }>
			<Container fluid="xxl">
				<Row>
					<Col xs={12} sm={6} lg={3} xl={3} className="mb-4">

						подвал

					</Col>
				</Row>
		</Container>
	</Container>
	)
}