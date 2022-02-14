import Link from 'next/link'
import {Container, Row, Col } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import Phone from '@components/dumb/phone/Phone'

import styles from './Footer.module.scss'
import { main } from '@popperjs/core'

const thisYear = new Date();

export default function Footer({ 
	mainData,
	mainPages,
	pagePrice,
	pageInfo,
	pagePrivacy,
}) {

	//debugger; 
	return (
	<Container as="footer" fluid className={ styles.block }>
		<Container 
			fluid="xxl" 
			className={ styles.wrapper }
			itemScope 
			itemType="https://schema.org/WPFooter"
		>
			<Row>
				<Col 
					xs={ 12 }
					lg={{ span: 6, order: 1 }}
					xl={{ span: 3, order: 1 }}
					className={ styles.col }
				>

					<LinkLogo />

					<p>
						Ритуальные услуги в Москве и Московской области. 
						Приезд консультанта в течении часа круглосуточно
					</p>

				</Col>
				<Col 
					xs={ 12 }
					sm={ 6 }
					lg={{ span: 6, order: 3 }}
					xl={{ span: 3, order: 2 }}
					className={ styles.col }
				>
					<h4>
						Похоронные услуги
					</h4>
					<ul>
						{ pagePrice.map( (p, i) => (
							<li key={ i }>
								<Link
									href={ p.pathLink }
								>
									<a 
										title={ p.namePrice }
									>
										{ p.namePrice }
									</a>
								</Link>
							</li>
						))}
					</ul>
				</Col>
				<Col 
					xs={ 12 }
					sm={ 6 }
					lg={{ span: 6, order: 4 }}
					xl={{ span: 3, order: 3 }}
					className={ styles.col }
				>
					<h4>
						Информация
					</h4>
					<ul>
						{ pageInfo.map( (p, i) => (
							<li key={ i }>
								<Link
									href={ p.pathLink }
								>
									<a 
										title={ p.namePrice }
									>
										{ p.namePrice }
									</a>
								</Link>
							</li>
						))}
					</ul>
				</Col>
				<Col 
					xs={ 12 }
					lg={{ span: 6, order: 2 }}
					xl={{ span: 3, order: 4 }}
					className={ styles.col }
				>
					<h4>
						Круглосуточная горячая линия
					</h4>
					
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
			<Row>
				<Col xs= {12}>
				<hr />
				</Col>
				<Col xs={ 12 } sm={ 6 } className={ styles.copyright }>
					<small>
						© 2011 — <span itemProp="copyrightYear">
							{ thisYear.getFullYear() }
						</span> Все права защищены.<br /> 
						Официальный сайт — <Link 
								href={ mainPages[3].pathLink }
							>
								<a 
									title={ mainData.nameCompanyFull }
								>
									{ mainData.nameCompanyFull }
								</a>
							</Link>
					</small>
				</Col>
				<Col xs={ 12 } sm={ 6 } className={ styles.licenses }>
					<small>
						<Link 
							href={ pagePrivacy.pathLink }
						>
							<a 
								title={ pagePrivacy.titleLink }
							>
								{ pagePrivacy.nameLink }
							</a>
						</Link>
					</small>
				</Col>
			</Row>
		</Container>
	</Container>
	)
}