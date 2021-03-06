import {Container, Row, Col, Button } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import PhoneSVG from '@components/ui/ico/PhoneSVG'
import Phone from '@components/dumb/phone/Phone'

import styles from './Header.module.scss'

export default function Header({ 
	mainData,
	setmodalShow
}) {

	//debugger;
	return (
	<Container as="header" fluid="xxl" className={ styles.wrapper }>
		<Row>
			<Col lg={ 2 } xl={ 2 } className={`d-none d-lg-block ${ styles.logo }`}>

				<LinkLogo />

			</Col>
			<Col xs={ 7 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 3 } className={`pt-1 ${ styles.company}`} >
			
				Официальный сайт<br />
				Городская ритуальной служба<br />
				Москва и Московская область

			</Col>
			<Col xs={ 5 } sm={ 6 } md={ 4 } lg={ 2 } xl={ 2 } className={`pt-1`}>
			
				Более <strong>10 лет</strong><br />
				профессионального<br />
				обслуживания

			</Col>
			<Col md={ 4 } lg={ 2 } xl={ 2 } className="d-none d-md-block pt-1" >
			
				
				<Button 
					variant="outline-primary" 
					onClick={() => setmodalShow(true)}
				>
					Вызвать агента
				</Button>

			</Col>
			<Col lg={ 3 } xl={ 3 }  className={`d-none d-lg-block text-center ${ styles.phone }`}>

				<small>Круглосуточная горячая линия:</small>
				<PhoneSVG />
				<Phone 
					phone={ mainData.phoneNumber_1 }
				/>

			</Col>
		</Row>
	</Container>
	)
}