import { rename, removeExercise, updateExercise } from '../store/slices/addTrainSlice';
import TrainFormExs from '../components/TrainFromExs';
import Button from '../components/Button';
import TrainFormHead from '../components/TrainFormHead';
import './TrainFormView.css';

const TrainFormView = ({ train, dispatch, setChoosing, onSave }) => {
	return (
		<>
			<TrainFormHead train={train} change={name => dispatch(rename(name))} />
			<TrainFormExs train={train} update={up => dispatch(updateExercise(up))} del={i => dispatch(removeExercise(i))} />
			<button className='train-form-view__add-ex' onClick={() => setChoosing(true)}>
				Добавить
			</button>
			<Button action={onSave} fullsize>
				Сохранить
			</Button>
		</>
	);
};

export default TrainFormView;
