import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataEx, resetEx } from '../store/slices/addExerciseSlice';
import HeaderBack from '../components/HeaderBack';
import { useEffect } from 'react';
import { updateExercise } from '../store/slices/exercisesSlice';
import ExerciseForm from '../components/ExerciseForm';
import Button from '../components/Button';

const EditExercisePage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const exData = useSelector(state => state.exercises.list[id]);
	const ex = useSelector(state => state.addExercise);
	const navigate = useNavigate();
	const change = action => dispatch(setDataEx(action));

	const handleSave = () => {
		dispatch(updateExercise({ id, data: ex }));
		dispatch(resetEx());
		navigate('/exercises');
	};

	useEffect(() => {
		exData && dispatch(setDataEx(exData));
	}, [dispatch, exData]);
	if (!exData)
		return (
			<main>
				<HeaderBack title='Упражнение не найдено' to='/exercises' />
			</main>
		);
	return (
		<main>
			<HeaderBack title={ex.name} to='/exercises' />
			<ExerciseForm ex={ex} change={change} />
			<Button fullsize action={handleSave}>
				Сохранить
			</Button>
		</main>
	);
};

export default EditExercisePage;
