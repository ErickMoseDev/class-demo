import React from 'react';
import './wrappers.css';

function SidebarLayout({ children }) {
	return (
		<div className="parent">
			<div className="sidebar">
				<ul>
					<li>Home</li>
					<li>Login</li>
					<li>Register</li>
					<li>About</li>
					<li>Contact us</li>
				</ul>
			</div>
			<div className="main-layout">{children}</div>
		</div>
	);
}

export default SidebarLayout;
