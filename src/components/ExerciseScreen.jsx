import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'motion/react';
import CircleBackground from './CircleBackground';
import Button from '../components/Button';
import './ExerciseScreen.css';

const ExerciseScreen = ({ exercise, onComplete }) => {
	const exData = useSelector(state => state.exercises.list[exercise.id]);
	const [timeLeft, setTimeLeft] = useState((exData.type === 't' && exercise.val) || null);

	useEffect(() => {
		if (exData.type === 't') {
			if (timeLeft > 0) {
				const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
				return () => clearTimeout(timer);
			} else onComplete();
		}
	}, [timeLeft, exercise.type, exData.type, onComplete]);

	return (
		<motion.main
			initial={{ x: '100%' }}
			animate={{ x: 0 }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.2 }}
			className='exercise-screen'>
			<CircleBackground />
			<h1 className='exercise-screen__title'>{exData.name}</h1>
			<img className='exercise-screen__img' src={exData.img || '/examples/ex1.jpg'} alt={exData.name} width='19rem' />
			<p className='exercise-screen__description'>{exData.description}</p>

			<div className='exercise-screen__info'>
				{exData.type === 't' ? (
					<motion.div
						className='exercise-screen__timer'
						initial={{ scale: 1 }}
						animate={{ scale: [1, 1.1, 1] }}
						transition={{ repeat: Infinity, duration: 1 }}>
						{timeLeft}s
					</motion.div>
				) : (
					<div className='exercise-screen__reps'>{exercise.val} подходов</div>
				)}
				{exData.type === 'w' && <div className='exercise-screen__reps'>{exercise.w} кг</div>}
			</div>

			{exData.type !== 't' && <Button action={onComplete}>Продолжить</Button>}
		</motion.main>
	);
};

export default ExerciseScreen;
