import { NavLink, Outlet } from 'react-router-dom';
export const PageMembers = () => {
	return (
		<nav className="page_members">
			<NavLink to="info">Info</NavLink> |{' '}
			<NavLink to="edward">Edward</NavLink>
			<Outlet />
		</nav>
	);
};
