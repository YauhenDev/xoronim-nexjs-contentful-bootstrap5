import Link from 'next/link'
import {Container, Row, Col } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import Phone from '@components/dumb/phone/Phone'

import styles from './Footer.module.scss'

const thisYear = new Date();

export default function Footer({ 
	mainData,
	mainPages
}) {

	//debugger; 
	return (
	<Container fluid className={ styles.block }>
		<Container 
			fluid="xxl" 
			className={ styles.wrapper }
			itemScope 
			itemType="https://schema.org/WPFooter"
		>
			<Row>
				<Col xl={ 3 }>

					<LinkLogo />

					<p>
						Ритуальные услуги в Москве и Московской области. 
						Приезд консультанта в течении часа круглосуточно
					</p>

				</Col>
				<Col xl={ 3 }>
						<h4>
							Похоронные услуги
						</h4>
						<ul>
							<li>
								<Link
									href="/services/prices/socialnye-pokhorony"
								>
									<a 
										title="Социальные похороны"
									>
										Социальные похороны
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/services/prices/standartnye-pokhorony"
								>
									<a 
										title="Стандартные похороны"
									>
										Стандартные похороны
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/services/prices/premium-pokhorony"
								>
									<a 
										title="Премиум похороны"
									>
										Премиум похороны
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/services/prices/elitnye-pokhorony"
								>
									<a 
										title="Элитные похороны"
									>
										Элитные похороны
									</a>
								</Link>
							</li>
						</ul>
				</Col>
				<Col xl={ 3 }>
					<h4>
						Информация
					</h4>
					<ul>
						<li>
							<Link
								href="/"
							>
								<a 
									title="О Компании"
								>
									О Компании
								</a>
							</Link>
						</li>
					</ul>
				</Col>
				<Col xl={ 3 }>
					Круглосуточная горячая линия
					<address>
						<ul itemScope itemType="http://schema.org/PostalAddress">
							<li itemProp="telephone" className={ styles.phone }>
								<Phone 
									phone={ mainData.phoneNumber_1 }
								/>
							</li>
							<li itemProp="email">
								<a href={`mailto:${ mainData.email }`}>{ mainData.email }</a>
							</li>
							<li>
								<span itemProp="postalCode">{ mainData.legalAdrPostcode }</span>, 
								<span itemProp="addressCountry">Россия</span>,
								<span itemProp="addressLocality">{ mainData.legalAdrCity }</span>,
								<span itemProp="streetAddress">{ mainData.legalAdrStr }</span>
							</li>
						</ul>
					</address>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col xs={ 12 } sm={ 6 } className={ styles.copyright }>
					<small>
						© 2011 — <span itemProp="copyrightYear">
							{ thisYear.getFullYear() }
						</span> ООО "РСС", Все права защищены 
					</small>
				</Col>
				<Col xs={ 12 } sm={ 6 } className={ styles.licenses }>
					<small>
						<Link 
							href="/"
						>
							<a 
								title="Политика в отношении обработки персональных данных"
							>
								Политика в отношении обработки персональных данных
							</a>
						</Link>
					</small>
				</Col>
			</Row>
		</Container>
	</Container>
	)
}