import { motion } from 'motion/react';
import './ExerciseTypeSelect.css';

const EXERCISE_TYPES = [
	{ id: 't', label: 'Время' },
	{ id: 'r', label: 'Повторы' },
	{ id: 'w', label: 'Вес' },
];

const ExerciseTypeSelect = ({ value, onChange }) => {
	return (
		<div className='exercise-type-select'>
			{EXERCISE_TYPES.map(({ id, label }) => (
				<button key={id} className='exercise-type-select__option' onClick={() => onChange(id)}>
					<span>{label}</span>
					{value === id && (
						<motion.div layoutId='exercise-type-select__indicator' className='exercise-type-select__indicator' />
					)}
				</button>
			))}
		</div>
	);
};

export default ExerciseTypeSelect;
