import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMoney } from '../store/slices/settingsSlice';
import { addTrain } from '../store/slices/statisticsSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import trainSound from '../moduls/trainSound';
import TrainInfo from '../components/TrainInfo';
import ExerciseScreen from '../components/ExerciseScreen';
import RestScreen from '../components/RestScreen';
import FinishScreen from '../components/FinishScreen';

const TrainFlow = () => {
	const [step, setStep] = useState('info');
	const [currentExercise, setCurrentExercise] = useState(0);
	const { id } = useParams();
	const train = useSelector(state => state.trains.list[id]);
	const delay = useSelector(state => state.settings.delay);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const nextStep = () => {
		if (step === 'info') {
			setStep('exercise');
		} else if (step === 'exercise') {
			if (currentExercise === train.exercises.length - 1) {
				setStep('completion');
			} else if (!delay) {
				setCurrentExercise(prev => prev + 1);
			} else {
				setStep('rest');
			}
		} else if (step === 'rest') {
			setCurrentExercise(prev => prev + 1);
			setStep('exercise');
		}
		trainSound(step === 'exercise' && currentExercise === train.exercises.length - 1);
	};

	const handleFinish = () => {
		dispatch(addTrain({ date: new Date().toJSON().substring(0, 10), name: train.name, calories: train.k }));
		dispatch(addMoney(train.reward));
		navigate('/trains');
	};

	return (
		<AnimatePresence mode='wait'>
			{step === 'info' && <TrainInfo key='info' id={id} train={train} onStart={() => nextStep(0)} />}
			{step === 'exercise' && (
				<ExerciseScreen key={currentExercise + 'ex'} exercise={train.exercises[currentExercise]} onComplete={nextStep} />
			)}
			{step === 'rest' && (
				<RestScreen key={currentExercise + 'rest'} next={nextStep} nextExercise={train.exercises[currentExercise + 1]} />
			)}
			{step === 'completion' && <FinishScreen key='completion' train={train} onFinish={handleFinish} />}
		</AnimatePresence>
	);
};

export default TrainFlow;
