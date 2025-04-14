import { motion } from 'motion/react';
import Button from './Button';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
	if (!isOpen) return null;

	return (
		<>
			<div className='modal__backdrop' onClick={onClose}></div>
			<motion.div
				key='modal'
				className='modal__content'
				onClick={e => e.stopPropagation()}
				initial={{ y: '-100%', opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: '-100%', opacity: 0 }}>
				<h2>{title}</h2>
				{children}
				<Button action={onClose} fullsize>
					Закрыть
				</Button>
			</motion.div>
		</>
	);
};

export default Modal;
