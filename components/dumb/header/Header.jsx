import {Container, Col, Button } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import PhoneSVG from '@components/ui/ico/PhoneSVG'
import Phone from '@components/dumb/phone/Phone'

import {
	wrapper,
	logo,
	company,
	phone
} from './Header.module.scss'

export default function Header({ 
	mainData,
	setmodalShow
}) {

	//debugger;
	return (
	<Container fluid="xxl" className={ wrapper }>
		<header 
			className="row" 
			itemScope 
			itemType="https://schema.org/WPHeader"
		>
			<Col lg={ 2 } xl={ 2 } className={`d-none d-lg-block ${ logo }`}>

				<LinkLogo />

			</Col>
			<Col xs={ 7 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 3 } className={`pt-1 ${ company}`} >
			
				Официальный сайт<br />
				Городская ритуальной служба<br />
				Москва и Московская область

			</Col>
			<Col xs={ 5 } sm={ 6 } md={ 4 } lg={ 2 } xl={ 2 } className={`pt-1`}>
			
				Более <strong>15 лет</strong><br />
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
			<Col lg={ 3 } xl={ 3 }  className={`d-none d-lg-block text-center ${ phone }`}>

				<small>Круглосуточная горячая линия:</small>
				<PhoneSVG />
				<Phone 
					phone={ mainData.phoneNumber_1 }
				/>

			</Col>
		</header>
	</Container>
	)
}