import React from 'react';
import Button from '../buttons/Button';
import './styles.css';

function Login() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<input type="email" placeholder="Enter your email" />
				<input type="password" placeholder="Enter your password" />

				<Button buttonType={''} buttonText={'Login'} />
			</form>
		</div>
	);
}

export default Login;
