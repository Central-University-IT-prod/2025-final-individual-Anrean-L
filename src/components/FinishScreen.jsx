import { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import './FinishScreen.css';

const FinishScreen = ({ train, onFinish }) => {
	useEffect(() => {
		setTimeout(
			() =>
				confetti({
					particleCount: 100,
					spread: 70,
					origin: { y: 1 },
				}),
			500,
		);
	}, []);

	return (
		<motion.main
			className='finish-screen'
			initial={{ x: '100%' }}
			animate={{ x: 0 }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.2 }}>
			<div className='finish-screen__content'>
				<h1 className='finish-screen__title'>🎉 Тренировка завершена!</h1>
				<p className='finish-screen__stats'>
					🔥 Сожжено калорий: <b>{Math.ceil(train.k)}</b>
				</p>
				<motion.button
					className='finish-screen__button'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={onFinish}>
					💰 Получить монеты
				</motion.button>
			</div>
		</motion.main>
	);
};

export default FinishScreen;
