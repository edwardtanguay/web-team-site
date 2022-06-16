import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageMembers } from './pages/PageMembers';
import { PageResearch } from './pages/PageResearch';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<h1>Web Team 001</h1>
			<hr />
			<NavLink to="/welcome">Welcome</NavLink> |{' '}
			<NavLink to="/members">Members</NavLink> |{' '}
			<NavLink to="/research">Research</NavLink>
			<hr />
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/members" element={<PageMembers />} />
				<Route path="/research" element={<PageResearch />} />
				<Route path="/" element={<Navigate to="/welcome" replace />}/>
			</Routes>
		</div>
	);
}

export default App;
