import './Button.css';
import classNames from 'classnames';

const Button = ({ action, children, fullsize = false }) => {
	return (
		<button
			className={classNames({ button: true, 'button--fullsize': fullsize })}
			onClick={action}
		>
			{children}
		</button>
	);
};

export default Button;
