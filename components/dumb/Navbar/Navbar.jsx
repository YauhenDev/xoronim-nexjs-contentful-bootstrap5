import { useState, useEffect } from 'react'
import {Container, Row, Col, Nav } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import LinksMenu  from '@components/dumb/menu/LinksMenu'
import MobileMenu from '@components/dumb/menu/MobileMenu'
import Phone from '@components/dumb/phone/Phone'

import {
	wrapper
} from './Navbar.module.scss'


export default function Header({ 
	mainData,
	mainPages,
	widthDevice
}) {

	// Добавляем DATA атрбут для меню при скроле
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 100);
		});
	}, []);

	// Определение телефона по сетке bootstrap 5
	const [isMobile, setIsMobile] = useState(widthDevice);
	const ismobile = widthDevice < 992;
	if (ismobile !== isMobile) setIsMobile(ismobile);
	

	//debugger;
	return (
	<Container fluid 
		className={`${wrapper}`} 
		data-menufix={scroll ? "true" : "false"}
	>
		<Container fluid="xxl">
			{isMobile ?
				// ЕСЛИ РАЗРЕШЕНИЕ МЕНЬШЕ 992 отображать МОБИЛЬНЫЙ NAVBAR
				<MobileMenu 
					mainData={ mainData }
					mainPages={ mainPages }
					widthDevice={widthDevice}
				/>
			: 
				// отображать ПОЛНЫЙ NAVBAR
				<Row>
					<Col lg={ 2 }>
						{
							// Отображать логотип при СКРОЛЕ
							scroll ? <LinkLogo /> : "" 
						}
					</Col>
					<Col className="text-center">
						<Nav className="navbar-expand-lg justify-content-center">
							<LinksMenu 
								mainPages={ mainPages }
							/>
						</Nav>
					</Col>
					<Col lg={ 2 } className="text-end" >
						{
							// Отображать телефон при СКРОЛЕ
							scroll ? <Phone mainData={ mainData } /> : ""
						}
					</Col>

				</Row>
			}
		</Container>			
	</Container>
	)
}