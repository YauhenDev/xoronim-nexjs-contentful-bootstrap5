import Layout from '@components/layouts/Layouts'

import '@styles/app.scss'
import state from 'data/stateJSON.json'

function Application({ Component, pageProps }) {

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