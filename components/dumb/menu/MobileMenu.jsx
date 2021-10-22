import { useState } from 'react'
import { Row, Col, Button, Offcanvas } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import CloseSVG from '@components/ui/ico/CloseSVG'
import LinksHeaderMenu from '@components/dumb/menu/LinksHeaderMenu'

import { 
	mobileToggler,
	aside,
	logo,
	close
} from './MobileMenu.module.scss'

export default function MobileMenu({ 
	mainPages
}) {

	// состояние bootstrap Offcanvas
	const [show, setShow] = useState(false);
	// закрываем Offcanvas
	const handleClose = () => setShow(false);
	// Открываем Offcanvas
	const handleShow = () => setShow(true);

	return (
	<>

		<Button 
			variant="light" 
			onClick={ handleShow }
			className={`btn p-0 ${ mobileToggler }`}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</Button>

		<Offcanvas show={show} onHide={handleClose} className={ aside } onClick={() => handleClose()}>
			<Row className={`g-0`}>
				<Col className={ logo }>
					<LinkLogo /> 
				</Col>
				<Col>
					<Button
						className={`btn ${ close }`}
						data-bs-dismiss="offcanvas" 
						aria-label="Close"
					>
							<CloseSVG />
					</Button>
				</Col>
			</Row>

			<Row className={`g-0`}>
				<Col>

					<LinksHeaderMenu 
						mainPages={ mainPages }
					/>

				</Col>
			</Row>

		</Offcanvas>
	
	</>
	)
}