import { useState } from 'react';
import './EquipmentInput.css';

const EquipmentInput = ({ equipment, onChange }) => {
	const [inputValue, setInputValue] = useState('');

	const addEquipment = () => {
		const trimmedValue = inputValue.trim();
		if (trimmedValue && !equipment.includes(trimmedValue)) {
			const newEquipment = [...equipment, trimmedValue];
			onChange(newEquipment);
			setInputValue('');
		}
	};

	const removeEquipment = item => {
		const newEquipment = equipment.filter(eq => eq !== item);
		onChange(newEquipment);
	};

	const handleKeyDown = e => {
		if (e.key === 'Enter') addEquipment();
	};

	return (
		<div className='equipment-container'>
			<label>
				Специальное оборудование:
				<div className='equipment-input-wrapper'>
					<input
						type='text'
						name='equipment-name'
						maxLength={100}
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder='Добавьте оборудование...'
						className='equipment-input'
					/>
					<button type='button' onClick={addEquipment} className='equipment-add-btn'>
						Добавить
					</button>
				</div>
			</label>
			<ul className='equipment-list'>
				{equipment.map(item => (
					<li key={item} className='equipment-item'>
						{item}
						<button type='button' onClick={() => removeEquipment(item)} className='equipment-remove-btn'>
							✕
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EquipmentInput;
