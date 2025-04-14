import example from '/examples/ex1.jpg';
import './ExerciseListItem.css';

const ExersizeListItem = ({ exercise, onClick }) => {
	return (
		<li className='exercise-list-item'>
			<button
				className='exercise-list-item__button'
				style={{ backgroundImage: `url(${exercise.img || example})` }}
				onClick={onClick}
			>
				<div className='exercise-list-item__backdrop'></div>
				<span className='exercise-list-item__name'>{exercise.name}</span>
			</button>
		</li>
	);
};

export default ExersizeListItem;
