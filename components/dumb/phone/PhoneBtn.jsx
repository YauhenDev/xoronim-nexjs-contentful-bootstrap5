import { Button } from 'react-bootstrap'

import PhoneSVG from '@components/ui/ico/PhoneSVG'

import styles from './Phone.module.scss'


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
			className={`${ styles.link } p-0`}
		>
			<span className={ styles.pulse }>
				<span className={ styles.phone }>
					<PhoneSVG />
				</span>
			</span>
		</Button>
	</>
	)
}