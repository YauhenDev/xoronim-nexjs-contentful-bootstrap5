import Accordion from 'react-bootstrap/Accordion'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Phone from '@components/dumb/phone/Phone'

export default function BlockDetailsItems({ 
	phone,
	chtoDelat
}) {

	chtoDelat.sort((a, b) => a.fields.sort - b.fields.sort)
	const chtoDelatOpenBlock = chtoDelat.filter(chtoDelat => chtoDelat.fields.openBlock)
	const chtoDelatBlocks = chtoDelat.filter(chtoDelat => chtoDelat.fields.closeBlock)

	//debugger;
	return (
	<Accordion 
		defaultActiveKey={['0']}
		alwaysOpen 	// не закрывать автоматически
		flush		//  убрать бордер у первого и последнего элемента
	>
		{ chtoDelatOpenBlock.map(p => (
			<Accordion.Item 
				key={ p.sys.id }
				eventKey="0"
			>
					<Accordion.Header as="h4">
						{ p.fields.heading }
					</Accordion.Header>
					<Accordion.Body>
						{ 
							documentToReactComponents( p.fields.description )
						}
					</Accordion.Body>
			</Accordion.Item>
		))}


		{ chtoDelatBlocks.map( (p, i) => (
			<Accordion.Item 
				key={ p.sys.id }
				eventKey={ i=i+1 }
			>
				<Accordion.Header as="h4">

					{ p.fields.heading }

				</Accordion.Header>
				<Accordion.Body>

					<p className="pb-2">
						Вызовите официального представителя по  
						телефону <Phone 
							phone={ phone }
						/>, чтобы не стать жертвой черных агентов. 
					</p>

					{ 
						documentToReactComponents( p.fields.description )
					}

				</Accordion.Body>
			</Accordion.Item>
		))}

	</Accordion>
	)
}