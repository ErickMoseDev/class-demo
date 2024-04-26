import React from 'react';
import Button from '../buttons/Button';
import './styles.css';

function Register() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h1>Create account</h1>

			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Enter your first name" />
				<input type="text" placeholder="Enter your last name" />
				<input type="text" placeholder="Enter your age" />

				<Button buttonType={''} buttonText={'Create account'} />
			</form>
		</div>
	);
}

export default Register;
