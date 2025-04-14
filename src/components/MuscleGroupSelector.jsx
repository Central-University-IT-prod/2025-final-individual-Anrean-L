import './MuscleGroupSelector.css';

const MUSCLE_GROUPS = [
	'Грудь',
	'Спина',
	'Плечи',
	'Бицепс',
	'Трицепс',
	'Пресс',
	'Ягодицы',
	'Квадрицепсы',
	'Икры',
	'Бицепс бедра',
	'Косые мышцы',
	'Кардио',
];

const MuscleGroupSelector = ({ selected, onChange }) => {
	const toggleGroup = group => {
		const newSelected = selected.includes(group) ? selected.filter(g => g !== group) : [...selected, group];
		onChange(newSelected);
	};

	return (
		<div className='muscle-group-selector'>
			<p>Группы мышц:</p>
			<div className='muscle-group-selector__list'>
				{MUSCLE_GROUPS.map(group => (
					<label key={group} className='muscle-group-selector__item'>
						<input
							name='muscle-group'
							type='checkbox'
							checked={selected.includes(group)}
							onChange={() => toggleGroup(group)}
						/>
						{group}
					</label>
				))}
			</div>
		</div>
	);
};

export default MuscleGroupSelector;
