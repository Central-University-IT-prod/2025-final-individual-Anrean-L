import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setData, resetTrain, addExercise } from '../store/slices/addTrainSlice';
import { updateTrain } from '../store/slices/trainsSlice';
import HeaderBack from '../components/HeaderBack';
import ExercisesList from '../components/ExercisesList';
import TrainFormView from '../components/TrainFormView';
import { processEx } from '../moduls/calculateEx';

const EditTrainPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const train = useSelector(state => state.addTrain);
	const trainData = useSelector(state => state.trains.list[id]);
	const exercises = useSelector(state => state.exercises.list);
	const [choosing, setChoosing] = useState(false);

	const handleSave = () => {
		dispatch(updateTrain({ id, data: train }));
		dispatch(resetTrain());
		navigate('/trains');
	};

	useEffect(() => {
		trainData && dispatch(setData(trainData));
	}, [dispatch, trainData]);
	if (!trainData)
		return (
			<main>
				<HeaderBack title='Тренировка не найдена' to='/exercises' />
			</main>
		);
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
				<TrainFormView train={train} dispatch={dispatch} setChoosing={setChoosing} onSave={handleSave} />
			)}
		</main>
	);
};

export default EditTrainPage;
