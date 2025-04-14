import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeTrain } from '../store/slices/trainsSlice';
import Button from '../components/Button';
import ImageActions from './ImageActions';
import HeaderBack from './HeaderBack';
import TrainPreview from './TrainPreview';
import './TrainInfo.css';

const TrainInfo = ({ id, train, onStart }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDelete = () => {
		dispatch(removeTrain(id));
		navigate('/trains');
	};

	if (!train) {
		return (
			<main>
				<HeaderBack title='Тренировка не найдена' />
			</main>
		);
	}

	return (
		<main className='train-info'>
			<ImageActions
				img={train.img || '/examples/train.jpg'}
				edit={() => navigate(`/trains/edit/${id}`)}
				remove={() => handleDelete()}
			/>
			<HeaderBack title={train.name} to='/trains' />
			<TrainPreview exercises={train.exercises} />
			<Button action={onStart}>Начать</Button>
		</main>
	);
};

export default TrainInfo;
