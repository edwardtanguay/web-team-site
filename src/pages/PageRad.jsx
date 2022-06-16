import { NavLink } from 'react-router-dom';

export const PageRad = () => {
	return (
		<div className="page_rad">
			<p>These are new tools, libraries, etc. that members are experimenting with. Projects here are generally not complete. For that, see <NavLink to="/welcome">Welcome</NavLink>.</p>
		</div>
	)
}