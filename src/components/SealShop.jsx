import { useState } from 'react';
import { motion } from 'motion/react';
import SealShopTab from './SealShopTab';
import Modal from './Modal';
import './SealShop.css';

const TABS = [
	{ id: 'glasses', label: 'Очки' },
	{ id: 'hat', label: 'Шапки' },
	{ id: 'bracelet', label: 'Браслеты' },
];

const SealShop = ({ onClose, isOpen }) => {
	const [activeTab, setActiveTab] = useState('glasses');

	return (
		<Modal onClose={onClose} isOpen={isOpen} title='Магазин кастомизации'>
			<div className='shop'>
				<div className='shop__tabs'>
					{TABS.map(tab => (
						<button
							key={tab.id}
							className={activeTab === tab.id ? 'active' : ''}
							onClick={() => setActiveTab(tab.id)}>
							{tab.label}
							{activeTab === tab.id && (
								<motion.div
									layoutId='tabs-underline'
									className='shop__tabs-indicator'
									transition={{ type: 'spring', stiffness: 300, damping: 25 }}
								/>
							)}
						</button>
					))}
				</div>

				<SealShopTab type={activeTab} />
			</div>
		</Modal>
	);
};

export default SealShop;
