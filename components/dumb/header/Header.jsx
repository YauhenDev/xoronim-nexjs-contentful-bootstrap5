import { useState, useEffect } from 'react'
import {Container, Row, Col, Nav, NavDropdown } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import Phone from '@components/dumb/phone/Phone'

import {
	wrapper,
	logo
} from './Header.module.scss'

export default function Header({ 
	mainData
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ wrapper }>
		<header className="row">
			<Col lg={ 2 } xl={ 2 } className={`d-none d-lg-block ${ logo }`}>

				<LinkLogo />

			</Col>
			<Col xs={ 6 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 3 } >
			
				Официальный сайт<br />
				Городской ритуальной службы сервиса<br />
				Москва и Московская область

			</Col>
			<Col xs={ 6 } sm={ 6 } md={ 4 } lg={ 2 } xl={ 2 } >
			
				Более 15 лет <br />
				профессионального<br />
				обслуживания

			</Col>
			<Col md={ 4 } lg={ 2 } xl={ 2 } className="d-none d-md-block" >
			
				Вызвать агента

			</Col>
			<Col lg={ 3 } xl={ 3 }  className="d-none d-lg-block">

				Круглосуточная горячая линия:<br />
				<Phone 
					mainData={ mainData }
				/>

			</Col>
		</header>
	</Container>
	)
}