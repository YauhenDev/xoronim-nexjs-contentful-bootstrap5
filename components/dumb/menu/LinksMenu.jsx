import ActiveLink  from '@components/ui/links/ActiveLink'

import {
	nav,
	sidebarLink
} from './MobileMenu.module.scss'

export default function LinksMenu({ 
	mainPages
}) {

	return (
	<ul className={`${ nav } navbar-nav`}>
		{ mainPages.map( (p, i) => (
			<li key={ i } className="nav-item">
				<span>|</span>
				<ActiveLink 
					fuzzy
					href={ p.pathLink }
				>
					<a 
						title={ p.titleLink }
						className={ sidebarLink }
					>
						{ p.nameLink }
					</a>
				</ActiveLink>
			</li>
		))}
	</ul>
	)
}