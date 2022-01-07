import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

// https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js

import styles from './ActiveLink.module.scss'

const ActiveLink = ({ fuzzy = false, href, children }) => {
	const router = useRouter()
	let className = children.props.className || ''
	//let dataactive = children.props.setAttribute || 'false'

	const hrefTokens = href.substr(1).split('/')
	const pathTokens = router.asPath.substr(1).split('/')

	let matched = false;
	for (let i = 0; i < hrefTokens.length; i++) {
		if (hrefTokens[i] === pathTokens[i]) {
			matched = true;
			break;
		}
	}

	if ((!fuzzy && router.asPath === href) || (fuzzy && matched)) {
		className = `${ className } ${ styles.active }`;
		//dataactive = 'true'
	}

	return (
		<NextLink href={href}>
			{/* {React.cloneElement(children, { className, dataactive })} */}
			{React.cloneElement(children, { className })}
		</NextLink>
	)
}

export default ActiveLink