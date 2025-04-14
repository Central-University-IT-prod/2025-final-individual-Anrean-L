import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'motion/react';
import Button from './Button';
import CircleBackground from './CircleBackground';
import './RestScreen.css';

const RestScreen = ({ next, nextExercise }) => {
	const delay = useSelector(state => state.settings.delay);
	const [timeLeft, setTimeLeft] = useState(delay);
	const exData = useSelector(state => state.exercises.list[nextExercise.id]);

	useEffect(() => {
		if (timeLeft > 0) {
			const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
			return () => clearTimeout(timer);
		} else {
			next();
		}
	}, [timeLeft, next]);

	return (
		<motion.main
			initial={{ x: '100%' }}
			animate={{ x: 0 }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.2 }}
			className='rest-screen'>
			<CircleBackground />
			<h1 className='rest-screen__title'>Передохните</h1>

			<motion.div
				className='rest-screen__timer'
				initial={{ scale: 1 }}
				animate={{ scale: [1, 1.1, 1] }}
				transition={{ repeat: Infinity, duration: 1 }}>
				{timeLeft}с
			</motion.div>

			<div className='rest-screen__next-exercise'>
				<h2>Следующее упражнение:</h2>
				<p className='rest-screen__name'>{exData.name}</p>
				<p className='rest-screen__description'>{exData.description}</p>
			</div>

			<Button action={next}>Продолжить</Button>
		</motion.main>
	);
};

export default RestScreen;
