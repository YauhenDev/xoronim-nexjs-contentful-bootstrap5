import {Container, Row, Col } from 'react-bootstrap'

import {
	block,
	wrapper
} from './Footer.module.scss'

export default function Footer({ 
	mainPages
}) {

	//debugger;
	return (
	<Container fluid className={ block }>
		<Container 
			fluid="xxl" 
			className={ wrapper }
			itemScope 
			itemType="https://schema.org/WPFooter"
		>
			<Row>
				<Col xl={ 3 }>
					logo
					<span itemProp="copyrightYear">2021</span>
				</Col>
				<Col xl={ 3 }>
					footer
				</Col>
				<Col xl={ 3 }>
					footer
				</Col>
				<Col xl={ 3 }>
					footer
					{/* <address>
						<ul itemScope itemType="http://schema.org/PostalAddress">
							<li>
								<span itemProp="postalCode">123456</span>,
								<span itemProp="addressCountry">Россия</span>,
								<span itemProp="addressLocality">Москва</span>,
								<span itemProp="streetAddress">Московская ул., 777 корпус 1, строение 1</span>
							</li>
							<li itemProp="telephone">
								<a href="tel:+74950000000">8 (495) 000-00-00</a>
							</li>
							<li itemProp="email">
								<a href="mailto:email@example.com">email@example.com</a>
							</li>
						</ul>
					</address> */}
				</Col>
			</Row>
		</Container>
	</Container>
	)
}