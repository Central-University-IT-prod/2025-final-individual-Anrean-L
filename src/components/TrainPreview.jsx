import TrainPreviewItem from './TrainPreviewItem';
import './TrainPreview.css';

const TrainPreview = ({ exercises }) => {
	return (
		<ul className='train-preview'>
			{exercises.map(({ id, val, w }, i) => (
				<TrainPreviewItem key={id + i} id={id} val={val} w={w} />
			))}
		</ul>
	);
};

export default TrainPreview;
