import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeExercise } from '../store/slices/exercisesSlice';
import HeaderBack from '../components/HeaderBack';
import PresentList from '../components/PresentList';
import ImageActions from '../components/ImageActions';
import './ExerciseInfoPage.css';

const TYPE_LABELS = {
	r: 'С повторами',
	t: 'С временем',
	w: 'С весом',
};

const ExerciseInfoPage = () => {
	const { id } = useParams();
	const ex = useSelector(state => state.exercises.list[id]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	if (!ex)
		return (
			<main>
				<HeaderBack title='Упражнение не найдено' to='/exercises' />
			</main>
		);
	return (
		<main className='exercise-info-page'>
			<ImageActions
				img={ex.img || '/examples/ex1.jpg'}
				edit={() => navigate(`/exercises/edit/${id}`)}
				remove={() => {
					navigate('/exercises');
					dispatch(removeExercise(id));
				}}
			/>
			<HeaderBack title={ex.name} to='/exercises' />
			<p className='exercise-info-page__description'>{ex.description}</p>
			<ul className='exercise-info-page__info'>
				<li>
					<strong>Тип:</strong> {TYPE_LABELS[ex.type]}
				</li>
				{ex.time && (
					<li>
						<strong>Время на повтор:</strong> {ex.time} сек
					</li>
				)}
				{ex.w && (
					<li>
						<strong>Вес:</strong> {ex.w} кг
					</li>
				)}
				<li>
					<strong>Калории в секунду:</strong> {ex.k}
				</li>
				<li>
					<strong>Сложность:</strong>
					<span className='exercise-info-page__difficulty'>{'★'.repeat(ex.money)}</span>
				</li>
				{ex.equipment && (
					<li>
						<PresentList title='Специальное оборудование:' list={ex.equipment} />
					</li>
				)}
				{ex.muscles && (
					<li>
						<PresentList title='Группы мышц:' list={ex.muscles} />
					</li>
				)}
			</ul>
		</main>
	);
};

export default ExerciseInfoPage;
