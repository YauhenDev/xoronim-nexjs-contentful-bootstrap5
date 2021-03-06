import Image from 'next/image'
import { useState, useEffect } from 'react'

import BannerAnim, { Element } from 'rc-banner-anim'
import { Container, Row, Col } from 'react-bootstrap'


import IndexHeaderContent from './IndexHeaderContent'


import styles from './IndexHeader.module.scss'


export default function IndexHeader({ 
	mainData,
	setmodalShow,
	indexHeader
}) {

	const useDeviceSize = () => {

		const [widthDevice, setWidthDevice] = useState(0)
		const handleWindowResize = () => {
			setWidthDevice(window.innerWidth);
		}
		useEffect(() => {
			handleWindowResize();
			window.addEventListener('resize', handleWindowResize);
			return () => window.removeEventListener('resize', handleWindowResize);
		}, []);

		return widthDevice
	}
	const widthDevice = useDeviceSize();

	// Определение телефона по сетке bootstrap 5
	const [isTablet, setIsTablet] = useState(widthDevice);
	const istablet = widthDevice < 1200;
	if (istablet !== isTablet) setIsTablet(istablet);

	const [isMobile, setIsMobile] = useState(widthDevice);
	const ismobile = widthDevice < 992;
	if (ismobile !== isMobile) setIsMobile(ismobile);

	//debugger;
	return (
	<Container as="section" fluid className="p-0">
		<Row className={`g-0 ${ styles.parallax}`}>
			<Col>
				{ isMobile ? 
					<IndexHeaderContent 
						mainData={ mainData }
						indexHeader={ indexHeader }
						setmodalShow={ setmodalShow }
					/>
				: 
					<BannerAnim>
						<Element
							followParallax={{
								delay: 100,
								data: [
									{ id: 'hg1', value: -15, type: 'x' },
									{ id: 'hg2', value: 30, type: 'x' }
								],
							}}
						>
						<div className={ styles.parallaxBg1 } id="hg1">
							<Image 
								src="/assets/img/index_bg/bg_index_header_snd_next.png"
								layout="fill"
								loading="lazy"
								objectFit={ isTablet ? "contain" : "" }
							/>
						</div>
						<div className={ styles.parallaxBg2 } id="hg2">
							<Image 
								src="/assets/img/index_bg/bg_index_header_fst_next.png"
								layout="fill"
								loading="lazy"
							/>
						</div>

						<div className={ styles.angel }>
							<Image 
								src="/assets/img/index_bg/angel.png"
								layout="fixed"
								loading="lazy"
								width={ 658 }
								height={ 444 }
							/>
						</div>

						<IndexHeaderContent
							mainData={ mainData }
							indexHeader={ indexHeader }
							setmodalShow={ setmodalShow }
						/>

						</Element>
					</BannerAnim>
				}
			</Col>
		</Row>
	</Container>
	)
}