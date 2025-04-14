import './Input.css';

const Input = ({ val, name, type, label, onChange, placeholder = '', maxLength = null }) => {
	return (
		<label>
			{label}
			<input
				type={type}
				value={val}
				name={name}
				className='input'
				onChange={e => {
					onChange(e.target.value);
				}}
				placeholder={placeholder}
				step='1'
				maxLength={maxLength}
			/>
		</label>
	);
};

export default Input;
