import { Button } from 'react-bootstrap'

import PhoneSVG from '@components/ui/ico/PhoneSVG'

import styles from './Phone.module.scss'


export default function PhoneBtn({ 
	phone
}) {

	//debugger;
	return (
	<>
		<Button 
			//href={`tel:+${ phone }`}
			onClick={() => {
				  window.location.href = `tel:+${ phone }`;
			}}
			variant="light"
			className={`${ styles.link } p-0 bs-0`}
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