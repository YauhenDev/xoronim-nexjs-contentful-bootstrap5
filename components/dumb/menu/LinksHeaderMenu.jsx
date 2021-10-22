import ActiveLink  from '@components/ui/links/ActiveLink'

import { 
	nav
} from './MobileMenu.module.scss'

export default function LinksHeaderMenu({ 
	mainPages
}) {

	return (
	<nav className={ nav }>
		<ul>
			{ mainPages.map( (p, i) =>
				<li key={i} >
					<ActiveLink
						href={ p.pathLink }
					>
						<a
							title={ p.titleLink }
						>
							{ p.nameLink }
						</a>
					</ActiveLink>
				</li>
			)}
		</ul>
	</nav>
	)
}