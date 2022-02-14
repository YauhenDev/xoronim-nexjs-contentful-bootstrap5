import { useState } from 'react'
import { Row, Col, Button, Offcanvas } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import CloseSVG from '@components/ui/ico/CloseSVG'
import PhoneBtn from '@components/dumb/phone/PhoneBtn'
import LinksMenu from '@components/dumb/menu/LinksMenu'
import Phone from '@components/dumb/phone/Phone'

import styles from './MobileMenu.module.scss'

export default function MobileMenu({
	mainData, 
	mainPages,
	widthDevice
}) {

	// состояние bootstrap Offcanvas
	const [show, setShow] = useState(false);
	// закрываем Offcanvas
	const handleClose = () => setShow(false);
	// Открываем Offcanvas
	const handleShow = () => setShow(true);

	// Определение телефона по сетке bootstrap 5
	const [isMobile, setIsMobile] = useState(widthDevice);
	const ismobile = widthDevice < 992;
	if (ismobile !== isMobile) setIsMobile(ismobile);

	return (
	<>
	
		<Row>
			<Col xs={ 4 } sm={ 4 } md={ 4 } className={ styles.logomobile }>
				<LinkLogo />
			</Col>
			<Col xs={ 5 } sm={ 6 } md={ 6 }  className="text-end">
				<PhoneBtn 
					phone={ mainData.phoneNumber_1 } 
				/>
			</Col>
			<Col xs={ 3 } sm={ 2 } md={ 2 } className="text-end">
				<Button 
					variant="light" 
					onClick={ handleShow }
					className={`btn p-0 ${ styles.mobileToggler }`}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</Button>
			</Col>
		</Row>

		<Offcanvas 
			show={show} 
			onHide={handleClose} 
			className={ styles.aside } 
			onClick={() => handleClose()}
		>
			<Row className={`g-0`}>
				<Col className={ styles.logo }>

					<LinkLogo />

				</Col>
				<Col>

					<Button
						className={`${ styles.close }`}
						data-bs-dismiss="offcanvas" 
						aria-label="Close"
						variant="link"
					>
							<CloseSVG />
							{/* <CloseButton /> */}
					</Button>

				</Col>
			</Row>

			<Row className={`g-0`}>
				<Col className="pt-4">

					<LinksMenu 
						mainPages={ mainPages }
					/>

				</Col>
			</Row>

			<Row>
				<Col className={ styles.contacts }>

					<hr />

					Круглосуточная горячая линия:
					<p className={ styles.phone }>
						<Phone 
							phone={ mainData.phoneNumber_1 }
						/>
					</p>
					<p>
						{ mainData.legalAdrCity }<br /> 
						{ mainData.legalAdrStr }
					</p>
					<p>
						{ mainData.legalAdrMetro }
					</p>
					

				</Col>
			</Row>


		</Offcanvas>
	
	</>
	)
}