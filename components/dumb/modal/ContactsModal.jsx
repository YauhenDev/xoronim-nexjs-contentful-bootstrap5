import Modal from 'react-bootstrap/Modal'

import styles from './ContactsModal.module.scss'

export default function ContactsModal({ 
	modalShow,
	setmodalShow
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
				Large Modal
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			
		</Modal.Body>
	</Modal>
	)
}