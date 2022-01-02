import { Button } from 'react-bootstrap'

import PhoneSVG from '@components/ui/ico/PhoneSVG'

import {
	link,
	pulse,
	phone
} from './Phone.module.scss'


export default function PhoneBtn({ 
	mainData
}) {

	
	//debugger;
	return (
	<>
		<Button 
			onClick={() => {
				  window.location.href = `tel:+${ mainData.phoneNumber_1 }`;
			}}
			variant="light"
			className={`${ link } p-0`}
		>
			<span className={ pulse }>
				<span className={ phone }>
					<PhoneSVG />
				</span>
			</span>
		</Button>
	</>
	)
}