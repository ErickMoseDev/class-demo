import React, { useState } from 'react';
import './App.css';
import Button from './components/buttons/Button';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import SidebarLayout from './components/wrappers/SidebarLayout';

function App() {
	const [open, setOpen] = useState(false);

	const toggleState = () => setOpen(!open);
	return (
		<SidebarLayout>
			<Button buttonType={''} buttonText={'Normal'} click={toggleState} />
			<Button
				buttonType={'success'}
				buttonText={'Success'}
				click={() => alert('Success button clicked')}
			/>
			<Button
				buttonType={'warning'}
				buttonText={'Warning'}
				click={() => alert('Warning button clicked')}
			/>
			<Button
				buttonType={'error'}
				buttonText={'Error'}
				click={() => alert('Error button clicked')}
			/>
			{open === true ? (
				<div className="card">
					<h2>State: {open.toString()} </h2>
				</div>
			) : (
				<div className="card">
					<h2>State: {open.toString()} </h2>
					<p>This will only be visible when the state is false</p>
				</div>
			)}

			<Register />

			<Login />
		</SidebarLayout>
	);
}

export default App;
