import { NavLink, Outlet } from 'react-router-dom';
import { Separator } from '../../components/Separator';

export const PageMembers = () => {
	return (
		<nav className="page_members">
			<NavLink to="info">Info</NavLink><Separator/>
			<NavLink to="edward">Edward</NavLink>
			<Outlet />
		</nav>
	);
};
