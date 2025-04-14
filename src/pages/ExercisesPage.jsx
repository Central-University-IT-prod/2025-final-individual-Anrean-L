import ExercisesList from '../components/ExercisesList';
import NavMenu from '../components/NavMenu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ExercisesPage = () => {
	const exercises = useSelector(state => state.exercises.list);
	const navigate = useNavigate();
	return (
		<main className='exercises-page'>
			<ExercisesList exercises={exercises} action={id => navigate(`/exercises/${id}`)} />
			<NavMenu />
		</main>
	);
};

export default ExercisesPage;
