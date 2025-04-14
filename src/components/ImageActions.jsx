import editImg from '../assets/edit.svg';
import deleteImg from '../assets/delete.svg';
import './ImageActions.css';

const ImageActions = ({ img, edit, remove }) => {
	return (
		<div className='image-actions'>
			<img src={img} alt='image' />
			<div className='image-actions__btn-block'>
				<button onClick={edit} className='image-actions__button'>
					<img src={editImg} alt='Изменить' />
				</button>
				<button onClick={remove} className='image-actions__button'>
					<img src={deleteImg} alt='Удалить' />
				</button>
			</div>
		</div>
	);
};

export default ImageActions;
