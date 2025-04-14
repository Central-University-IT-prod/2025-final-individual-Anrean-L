import { useState } from 'react';
import Modal from './Modal';
import MuscleGroupSelector from './MuscleGroupSelector';
import EquipmentInput from './EquipmentInput';
import ExerciseDifficulty from './ExerciseDifficulty';
import Button from './Button';
import './FilterMenu.css';

const FilterMenu = ({ isOpen, onClose, onApply, filters }) => {
	const [localFilters, setLocalFilters] = useState(filters);
	const [noEquipment, setNoEquipment] = useState(filters.noEquipment);

	const handleEquipmentChange = val => {
		setNoEquipment(false);
		setLocalFilters({ ...localFilters, equipment: val });
	};

	const handleNoEquipmentChange = checked => {
		setNoEquipment(checked);
		setLocalFilters({ ...localFilters, equipment: checked ? [] : localFilters.equipment, noEquipment: checked });
	};

	const handleApply = () => {
		onApply(localFilters);
		onClose();
	};

	const handleDifficultyChange = val => {
		console.log(localFilters.difficulty);
		console.log(val);
		if (localFilters.difficulty === val) setLocalFilters({ ...localFilters, difficulty: null });
		else setLocalFilters({ ...localFilters, difficulty: val });
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Фильтр упражнений'>
			<EquipmentInput
				equipment={localFilters.equipment}
				onChange={handleEquipmentChange}
				disabled={noEquipment}
			/>
			<label className='filter-checkbox'>
				<input
					type='checkbox'
					checked={noEquipment}
					onChange={e => handleNoEquipmentChange(e.target.checked)}
				/>
				Без оборудования
			</label>

			<ExerciseDifficulty value={localFilters.difficulty} onChange={handleDifficultyChange} />

			<MuscleGroupSelector
				selected={localFilters.muscles}
				onChange={val => setLocalFilters({ ...localFilters, muscles: val })}
			/>

			<Button action={handleApply} fullsize>
				Применить
			</Button>
		</Modal>
	);
};

export default FilterMenu;
