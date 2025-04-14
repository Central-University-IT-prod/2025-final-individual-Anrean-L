import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDataEx, resetEx } from '../store/slices/addExerciseSlice';
import { addExercise } from '../store/slices/exercisesSlice';
import HeaderBack from '../components/HeaderBack';
import ExerciseForm from '../components/ExerciseForm';
import Button from '../components/Button';
import { useState } from 'react';

const AddExPage = () => {
	const dispatch = useDispatch();
	const ex = useSelector(state => state.addExercise);
	const change = action => dispatch(setDataEx(action));
	const [error, setError] = useState('ᅠᅠ');
	const navigate = useNavigate();

	const handleSave = () => {
		if (ex.type !== 't' && ex.time === '') setError('Время должно быть указано');
		if (ex.k === '') setError('Калории должны быть указаны');
		if (ex.name === '') setError('Название не должно быть пустым');
		else {
			dispatch(addExercise(ex));
			dispatch(resetEx());
			navigate('/exercises');
		}
	};

	return (
		<main className='add-ex-page'>
			<HeaderBack title={ex.name} to='/exercises' />
			<ExerciseForm ex={ex} change={change} />
			<p className='error'>{error}</p>
			<Button fullsize action={handleSave}>
				Сохранить
			</Button>
		</main>
	);
};

export default AddExPage;
