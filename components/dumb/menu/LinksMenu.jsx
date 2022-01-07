import ActiveLink  from '@components/ui/links/ActiveLink'

import styles from './MobileMenu.module.scss'

export default function LinksMenu({ 
	mainPages
}) {

	return (
	<ul 
		className={`${ styles.nav } navbar-nav`} 
		itemScope 
		itemType="https://schema.org/SiteNavigationElement"
	>
		{ mainPages.map( (p, i) => (
			<li 
				key={ i } 
				className={`${ styles.item } nav-item`}
				itemProp="name"
			>
				<ActiveLink 
					fuzzy
					href={ p.pathLink }
				>
					<a 
						title={ p.titleLink }
						className={ styles.sidebarLink }
						itemProp="url"
					>
						{ p.nameLink }
					</a>
				</ActiveLink>
			</li>
		))}
	</ul>
	)
}