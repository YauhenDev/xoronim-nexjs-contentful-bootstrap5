import NumberFormat from 'react-number-format'

export default function Phone({ 
	phone
}) {

	//debugger;
	return (
	<>
		<a href={`tel:+${ phone }`}>
			<NumberFormat 
				value={ phone }
				format="+# (###) ### ## ##"
				displayType="text"
			/>
		</a>
	</>
	)
}