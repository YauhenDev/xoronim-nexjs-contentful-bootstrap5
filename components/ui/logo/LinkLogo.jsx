import Link from 'next/link'

import Logo from './Logo'

const LinkLogo = () => {

	return (
		<Link 
			href="/"
		>
			<a 
				title="Ритуальная служба XORONIM.moscow"
				className="bs-0 d-block"
			>
				<Logo />
			</a>
		</Link>
	)
}

export default LinkLogo