import { useState, useEffect } from 'react'
import {Container, Row, Col, Nav } from 'react-bootstrap'

import LinkLogo from '@components/ui/logo/LinkLogo'
import LinksMenu  from '@components/dumb/menu/LinksMenu'
import MobileMenu from '@components/dumb/menu/MobileMenu'
import PhoneSVG from '@components/ui/ico/PhoneSVG'
import Phone from '@components/dumb/phone/Phone'

import styles from './Navbar.module.scss'


export default function Navbar({ 
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
	// для замены меню bootstrap 5 на offcanvas
	const [isMobile, setIsMobile] = useState(widthDevice);
	const ismobile = widthDevice < 992;
	if (ismobile !== isMobile) setIsMobile(ismobile);

	//debugger;
	return (
	<Container as="nav" fluid 
		className={`${styles.wrapper}`} 
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
					
					{
						// Отображать логотип при СКРОЛЕ
						scroll 
						? 
						<Col lg={ 2 } className={ styles.logomobile }>
							<LinkLogo /> 
						</Col>
						: 
							"" 
					}
					
					<Col className="text-center">
						<Nav className="navbar-expand-lg justify-content-center">
							<LinksMenu 
								mainPages={ mainPages }
							/>
						</Nav>
					</Col>
					
					{
						// Отображать телефон при СКРОЛЕ
						scroll 
						? 
							<Col lg={ 2 } className={`text-end ${ styles.phone }`} >
								<PhoneSVG />
								<Phone 
									phone={ mainData.phoneNumber_1 }
								/>
							</Col>
						: 
							""
					}

				</Row>
			}
		</Container>			
	</Container>
	)
}