import './ExerciseDifficulty.css';

const DIFFICULTY_LEVELS = [1, 2, 3, 4, 5];

const ExerciseDifficulty = ({ value = 3, onChange }) => {
	const handleSelect = level => {
		onChange(level);
	};

	return (
		<div className='difficulty-select'>
			Сложность:
			<div className='difficulty-select__container'>
				{DIFFICULTY_LEVELS.map(level => (
					<button
						key={level}
						className={`difficulty-select__button ${
							value === level ? 'difficulty-select__button--selected' : ''
						}`}
						onClick={() => handleSelect(level)}>
						{level}
					</button>
				))}
			</div>
		</div>
	);
};

export default ExerciseDifficulty;
