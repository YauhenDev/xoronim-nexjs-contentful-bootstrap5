import { useState } from 'react'
import Image from 'next/image'
import {Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react"
//import { Pagination } from 'swiper'
import CardPrice from './CardPrice'

import "swiper/css"
//import "swiper/css/pagination"

import {
	price,
	block,
	cloud,
	wrapper,
	angel,
	slide
} from './BlockPrice.module.scss'

export default function BlockPrice({ 
	phoneNumber, 
	header, 
	priceUslug,
	widthDevice,
	setmodalShow 
}) {

	priceUslug.sort((a, b) => a.fields.sorting - b.fields.sorting)

	// Определение телефона по сетке bootstrap 5
	// Подменяем блок цен на слайдер
	const [isMobile, setIsMobile] = useState(widthDevice);
	const ismobile = widthDevice < 576;
	if (ismobile !== isMobile) setIsMobile(ismobile);

	//debugger;
	return (
	<Container fluid className={ block }>
		<Container fluid className={`${ cloud } p-0 `}>
			<Container fluid className={`${ angel } p-0`}>
				<Image 
					src="/assets/img/price/statue.png"
					layout="fixed"
					loading="lazy"
					width={ 665 }
					height={ 730 }
				/>
			</Container>
			<Container fluid="xxl" className={ wrapper }>
				<Row>
					<Col xl={ 12 }>
						<h2>{ header }</h2>
					</Col>
				</Row>

				{isMobile ?
					<Row>
						<Swiper 
							slidesPerView={ 'auto' } 
							centeredSlides={ false } 
							spaceBetween={ 18 } // margin-left=12 ||| 30 - 12 = 18 
							loop={ true } 
							//modules={[ Pagination ]}
							//pagination={{
							//	"clickable": true
							//}}
						>
							{ priceUslug.map(p => (
								<SwiperSlide key={ p.sys.id } className={ slide }>
									<CardPrice
										url={ p.fields.slug }
										title={ p.fields.heading }
										txt={ p.fields.description }
										low={ p.fields.lowPrice }
										price={ p.fields.price }
										phoneNumber={ phoneNumber }
										setmodalShow={ setmodalShow }
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</Row>
				:
					<Row className="row row-cols-2 row-cols-lg-4 g-4">
						{priceUslug.map(p => (
							<Col key={ p.sys.id } className={ price }>
								<CardPrice
									url={ p.fields.slug }
									title={ p.fields.heading }
									txt={ p.fields.description }
									low={ p.fields.lowPrice }
									price={ p.fields.price }
									phoneNumber={ phoneNumber }
									setmodalShow={ setmodalShow }
								/>
							</Col>
						))}
					</Row>
				}

			</Container>
		</Container>
	</Container>
	)
}

