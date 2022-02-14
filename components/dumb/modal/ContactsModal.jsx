import { Row, Col, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

import Phone from '@components/dumb/phone/Phone'

import styles from './ContactsModal.module.scss'

export default function ContactsModal({ 
	modalShow,
	setmodalShow,
	mainData
}) {

	//debugger;
	return (
	<Modal
		size="lg"
		show={ modalShow }
		onHide={() => setmodalShow(false)}
		aria-labelledby="example-modal-sizes-title-lg"
	>
		<Modal.Header closeButton>
			<Modal.Title id="example-modal-sizes-title-lg">
				Вызвать  агента
			</Modal.Title>
		</Modal.Header>
		<Modal.Body className={ styles.order }>

			<Row className={ styles.row }>
				<Col 
					xs={5}
					md={6}
					className="text-end px-0"
				>
					Горячая линия:
				</Col>
				<Col>
					<Phone 
						phone={ mainData.phoneNumber_1 }
					/>
				</Col>
			</Row>
			<Row className={ styles.row }>
				<Col 
					xs={5}
					md={6}
					className="text-end px-0"
				>
					Email:
				</Col>
				<Col>
					<a href={`mailto:${ mainData.email }`}>
						{ mainData.email }
					</a>
				</Col>
			</Row>
			<Row>
				<Col
					className="text-end mt-2"
				>
					<Button 
						variant="secondary"
						onClick={() => setmodalShow(false)}
					>
						Закрыть
					</Button>
				</Col>
			</Row>

			

		</Modal.Body>
	</Modal>
	)
}