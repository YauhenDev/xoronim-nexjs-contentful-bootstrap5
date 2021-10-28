import NumberFormat from 'react-number-format'

export default function Phone({ 
	mainData
}) {

	//debugger;
	return (
	<>
		<a href={`tel:+${ mainData.phoneNumber_1 }`}>
			<NumberFormat 
				value={ mainData.phoneNumber_1 }
				format="+# (###) ### ## ##"
				displayType="text"
			/>
		</a>
	</>
	)
}