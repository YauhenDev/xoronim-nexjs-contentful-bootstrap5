import { Container, Row, Col } from 'react-bootstrap'

import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps"

const mapState = {
	center: [55.787037, 37.719064],
	zoom: 15
};

import { 
	block	
} from './YandexMap.module.scss'

const YandexMap = () => {

	return (
	<Container fluid className={`${block} p-0`}>
		<Row className="g-0">
			<Col xs={12}>

				<YMaps>
					<Map 
						state = { mapState }
						width = "100%"
						height = "330px"
					>
						<Placemark
							key= { 0 }
							geometry = { [ 55.787037, 37.719064 ] }
							options = { {
								iconLayout: 'default#image',
								iconImageHref: '/assets/img/logomap.svg',
								iconImageSize: [126, 45],
								iconImageOffset: [-62, -10],
							} }
							
						/>
						<ZoomControl options={ { float: 'right' } } />
					</Map>
				</YMaps>
				
			</Col>
		</Row>
	</Container>
	)
}
export default YandexMap