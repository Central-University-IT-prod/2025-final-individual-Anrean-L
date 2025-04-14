import Background from '../components/Background';
import Button from '../components/Button';
import Logo from '../components/Logo';
import bg from '../assets/bg_start.png';
import { useNavigate } from 'react-router-dom';
import './Start.css';

const Start = () => {
	const navigate = useNavigate();
	return (
		<main className='start'>
			<Background image={bg} color='#5285D8' className='start'>
				<Logo />
				<p className='start__description'>Начни тренироваться с SealFit!</p>
				<Button action={() => navigate('/profile')}>Начать</Button>
			</Background>
		</main>
	);
};

export default Start;
