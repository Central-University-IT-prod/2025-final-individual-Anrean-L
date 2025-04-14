import TrainListItem from './TrainListItem';
import './TrainsList.css';

const TrainsList = ({ trains, action }) => {
	return (
		<ul className='trains-list'>
			{Object.entries(trains).map(([id, train]) => (
				<TrainListItem train={train} onClick={() => action(id)} key={id} />
			))}
		</ul>
	);
};

export default TrainsList;
