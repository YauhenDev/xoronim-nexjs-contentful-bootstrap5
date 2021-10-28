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
		<a href={`tel:+${ mainData.phoneNumber_1 }`} className={ link }>
			<div className={ pulse }>
				<div className={ phone }>
					<PhoneSVG />
				</div>
			</div>
		</a>
	</>
	)
}