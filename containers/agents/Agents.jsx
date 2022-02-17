import {Container, Row } from 'react-bootstrap'

import Agent from './Agent'

import styles from './Agents.module.scss'

export default function Agents({ 
	allEmployees
}) {

	allEmployees.sort((a, b) => a.fields.sort - b.fields.sort)
	
	const workEmployees = allEmployees.filter(p => !p.fields.DoesNotWork)
	const dontWorkEmployees = allEmployees.filter(p => p.fields.DoesNotWork)

	// function dontWork() {
	// 	return (
	// 	<>
	// 		11111111
	// 	</>
	// )}


	//debugger;
	return (
	<Container as="section" fluid="xxl" className={ styles.wrapper }>
		<Row className="row-cols-2 row-cols-lg-4 g-4">
			{ workEmployees.map( (p, i) => (
				<Agent 
					key={ i }
					name={ p.fields.heading }
					img={`https:${p.fields.photo.fields.file.url}`}
					description={ p.fields.description }
					work={true}
				/>
			))}
			{ dontWorkEmployees.map( (p, i) => (
				<Agent 
					key={ i }
					name={ p.fields.heading }
					img={`https:${p.fields.photo.fields.file.url}`}
					//description={ p.fields.description }
					work={false}
				/>
			))}
		</Row>
	</Container>
	)
}