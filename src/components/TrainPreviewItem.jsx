import { useSelector } from 'react-redux';
import './TrainPreviewItem.css';
import { Link } from 'react-router-dom';

const TrainPreviewItem = ({ id, val, w }) => {
	const ex = useSelector(state => state.exercises.list[id]);
	return (
		<li className='train-preview-item'>
			<Link to={`/exercises/${id}`} className='train-preview-item__link'>
				<img src={ex.img || '/examples/ex1.jpg'} alt={ex.name} className='train-preview-item__image' width='50%' />
				<div className='train-preview-item__details'>
					<h2>{ex.name}</h2>
					<p>{ex.description}</p>
					{ex.type === 't' ? (
						<p>
							Время: <strong>{val}</strong> сек
						</p>
					) : (
						<p>
							Подходы: <strong>{val}</strong>
						</p>
					)}
					{w && (
						<p>
							Вес: <strong>{w}</strong> кг
						</p>
					)}
					{ex.equipment?.length > 0 && <p>Оборудование: {ex.equipment.join(', ')}</p>}
				</div>
			</Link>
		</li>
	);
};

export default TrainPreviewItem;
