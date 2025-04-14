import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import ExerciseListItem from './ExerciseListItem';
import FilterMenu from './FilterMenu';
import Button from './Button';
import Heading from './Heading';
import filterImg from '../assets/filter.svg';
import './ExercisesList.css';

const ExercisesList = ({ exercises, action }) => {
	const [isFilterOpen, setFilterOpen] = useState(false);
	const [filters, setFilters] = useState({
		equipment: [],
		noEquipment: false,
		difficulty: null,
		muscles: [],
	});

	const filteredExercises = Object.entries(exercises).filter(ex => {
		const matchEquipment =
			(filters.equipment.length === 0 && !filters.noEquipment) ||
			(filters.noEquipment && !ex[1].equipment) ||
			(filters.equipment.length > 0 && ex[1].equipment?.some(eq => filters.equipment.includes(eq)));
		const matchDifficulty = !filters.difficulty || ex[1].money === filters.difficulty;
		const matchMuscles = !filters.muscles.length || filters.muscles.some(muscle => ex[1].muscles.includes(muscle));
		return matchEquipment && matchDifficulty && matchMuscles;
	});

	return (
		<AnimatePresence>
			<div className='exercises-list__line'>
				<Heading>Упражнения:</Heading>
				<Button action={() => setFilterOpen(true)}>
					<img src={filterImg} alt='фильтр' />
				</Button>
			</div>
			<FilterMenu
				key='filter'
				isOpen={isFilterOpen}
				onClose={() => setFilterOpen(false)}
				onApply={setFilters}
				filters={filters}
			/>
			<ul className='exercises-list' key='ul'>
				{filteredExercises.map(([id, exercise]) => (
					<ExerciseListItem exercise={exercise} key={id} onClick={() => action(id)} />
				))}
			</ul>
		</AnimatePresence>
	);
};

export default ExercisesList;
