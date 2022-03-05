
import { useState } from 'react'

export default function ReadMore({ 
	text,
}) {

	const [isReadMore, setIsReadMore] = useState(true)
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore)
	}

	//debugger;
	return (
	<>
		{
			isReadMore 
		? 
			text.slice(0, 50) 
		: 
			text
		}
		
		<a onClick={toggleReadMore}>
			{isReadMore ? "Показать подробнее" : " Скрыть подробности"}
		</a>
	</>
	)
}