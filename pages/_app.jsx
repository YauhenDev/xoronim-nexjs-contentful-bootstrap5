import { useEffect } from 'react'
import Layout from '@components/layouts/Layouts'
import TagManager from 'react-gtm-module'

import '@styles/app.scss'

import state from 'data/stateJSON.json'

const tagManagerArgs = {
	gtmId: 'GTM-KHMK3T7'
}

function Application({ Component, pageProps }) {

	useEffect(() => {
	
		//GTM
		TagManager.initialize(tagManagerArgs);

	},[])

	return (
		<Layout
			state={ state }
		>
			<Component 
				{...pageProps}
				state={ state }
			/>
		</Layout>
	)
}

export default Application