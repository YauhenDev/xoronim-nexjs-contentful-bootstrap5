import { useState } from 'react'
import {Container, Row, Col, Nav, NavDropdown } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import MobileMenu from '@components/dumb/menu/MobileMenu'
import LinksHeaderMenu from '@components/dumb/menu/LinksHeaderMenu'

import {
	wrapper,
	//row,
	logo,
	ico
} from './Header.module.scss'

export default function Header({ 
	mainPages,
	widthDevice
}) {

	// Определение телефона по сетке bootstrap 5
	const [isMobile, setIsMobile] = useState(widthDevice);
	const ismobile = widthDevice < 768;
	if (ismobile !== isMobile) setIsMobile(ismobile);

	//debugger;
	return (
	<Container fluid="xxl" className={ wrapper }>
		<header className="row">

			<Col  xs={ 5 } sm={ 3 } md={ 2 } lg={ 2 } className={ logo }>

				ЛОГО

			</Col>
			<Col xs={ 7 } sm={ 9 }  md={ 10 } lg={ 10 } className="text-end">
				<Row>

					{isMobile ?
						<>
							<Col className={ ico } >


							</Col>
							<Col>

								<MobileMenu 
									mainPages={ mainPages }
								/>

							</Col>
						</>
					: 
						<>
							<Col>
								<LinksHeaderMenu 
									mainPages={ mainPages } 
								/>
							</Col>
							<Col className={ ico } >


							</Col>
						</>
					}

				</Row>

			</Col>
		</header>
	</Container>
	)
}