import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise, resetTrain } from '../store/slices/addTrainSlice';
import { addTrain } from '../store/slices/trainsSlice';
import { useNavigate } from 'react-router-dom';
import processTrain from '../moduls/processTrain';
import { processEx } from '../moduls/calculateEx';
import ExercisesList from '../components/ExercisesList';
import TrainFormView from '../components/TrainFormView';

const AddTrain = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const train = useSelector(state => state.addTrain);
	const [choosing, setChoosing] = useState(false);
	const exercises = useSelector(state => state.exercises.list);
	const [error, setError] = useState('ᅠᅠ');

	const handleSave = () => {
		if (train.name === '') setError('Название не должно быть пустым');
		else if (train.exercises.length === 0) setError('Вы не добавили упражнения');
		else if (train.exercises.some(item => !item.val || (Object.hasOwn(item, 'w') && !item.w)))
			setError('Время, число подходов и вес должны быть больше 0');
		else {
			dispatch(addTrain(processTrain(train)));
			dispatch(resetTrain());
			navigate('/trains');
		}
	};

	return (
		<main>
			{choosing ? (
				<ExercisesList
					exercises={exercises}
					action={id => {
						dispatch(addExercise(processEx(id)));
						setChoosing(false);
					}}
				/>
			) : (
				<>
					<TrainFormView train={train} dispatch={dispatch} setChoosing={setChoosing} onSave={handleSave} />
					<p className='error'>{error}</p>
				</>
			)}
		</main>
	);
};

export default AddTrain;
