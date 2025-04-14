import Heading from '../components/Heading';
import TrainsList from '../components/TrainsList';
import NavMenu from '../components/NavMenu';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TrainsPage = () => {
	const trains = useSelector(state => state.trains.list);
	const navigate = useNavigate();

	return (
		<main className='trains-page'>
			<Heading>Ваши тренировки:</Heading>
			<TrainsList trains={trains} action={id => navigate(`/trains/${id}`)}></TrainsList>
			<NavMenu />
		</main>
	);
};

export default TrainsPage;
