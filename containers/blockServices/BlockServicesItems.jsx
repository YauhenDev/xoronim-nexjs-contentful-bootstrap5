import { Row } from 'react-bootstrap'

import BlockServicesItem from './BlockServicesItem'

export default function BlockServicesItems({ 
	allServices
}) {

	allServices.sort((a, b) => a.fields.sort - b.fields.sort)
	const servicesTransport = allServices.filter(allServices => allServices.fields.transport)
	const servicesFuneral = allServices.filter(allServices => allServices.fields.funeralServices)
	const servicesBurial = allServices.filter(allServices => allServices.fields.burial)
	const servicesPaperwork = allServices.filter(allServices => allServices.fields.paperwork)

	//debugger;
	return (
	<Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">

		<BlockServicesItem
			cat="Ритуальный транспорт"
			arr={servicesTransport}
		/>

		<BlockServicesItem 
			cat="Похоронные услуги"
			arr={servicesFuneral}
		/>

		<BlockServicesItem
			cat="Захоронение"
			arr={servicesBurial}
		/>

		<BlockServicesItem
			cat="Оформление документов"
			arr={servicesPaperwork}
		/>

	</Row>
	)
}