import './button.css';

function Button({ buttonType, buttonText, click }) {
	// const { buttonType, buttonText, click } = props;
	return (
		<button
			className={`${
				buttonType === 'success'
					? 'success'
					: buttonType === 'warning'
					? 'warning'
					: buttonType === 'error'
					? 'error'
					: ''
			} `}
			onClick={click}
		>
			{buttonText}
		</button>
	);
}

export default Button;

// the condition ? true : false
