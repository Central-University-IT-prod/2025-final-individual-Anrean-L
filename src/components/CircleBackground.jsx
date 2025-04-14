import { motion } from 'motion/react';
import './CircleBackground.css';

const CircleBackground = () => {
	return (
		<div className='circle-background'>
			<motion.div
				className='circle-background__circle circle-background__circle--large'
				animate={{ scale: [1, 1.1, 1] }}
				transition={{ repeat: Infinity, duration: 2 }}
			/>
			<motion.div
				className='circle-background__circle circle-background__circle--medium'
				animate={{ scale: [1, 1.15, 1] }}
				transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
			/>
			<motion.div
				className='circle-background__circle circle-background__circle--small'
				animate={{ scale: [1, 1.2, 1] }}
				transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
			/>
		</div>
	);
};

export default CircleBackground;
