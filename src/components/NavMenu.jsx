import trainsImg from '../assets/trains.svg';
import exercisesImg from '../assets/exercise.svg';
import statImg from '../assets/stat.svg';
import profileImg from '../assets/profile.svg';
import plusImg from '../assets/plus.svg';

import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import './NavMenu.css';

const navItems = [
	{ to: '/trains', ariaLabel: 'Тренировки', img: trainsImg },
	{ to: '/exercises', ariaLabel: 'Упражнения', img: exercisesImg },
	{ to: '/statistics', ariaLabel: 'Статистика', img: statImg },
	{ to: '/profile', ariaLabel: 'Профиль', img: profileImg },
];

const NavMenuItem = ({ item }) => {
	return (
		<NavLink to={item.to} className='nav-menu__link' title={item.ariaLabel}>
			{({ isActive }) => (
				<>
					<img src={item.img} alt={item.ariaLabel} />
					{isActive && (
						<motion.div
							layoutId='nav-indicator'
							className='nav-menu__indicator'
							style={{ originY: '0px' }}
							transition={{ type: 'spring', stiffness: 300, damping: 20 }}
						/>
					)}
				</>
			)}
		</NavLink>
	);
};

const NavMenuAdd = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const newPath = currentPath.endsWith('/add')
		? currentPath
		: currentPath.endsWith('/')
		? `${currentPath}add`
		: `${currentPath}/add`;
	return (
		<NavLink to={newPath} className='nav-menu__add'>
			<img src={plusImg} alt='Добавить' />
		</NavLink>
	);
};

const NavMenu = () => {
	return (
		<nav className='nav-menu'>
			<div className='nav-menu__grid'>
				{navItems.map(item => (
					<NavMenuItem item={item} key={item.to} />
				))}
			</div>
			<NavMenuAdd />
		</nav>
	);
};

export default NavMenu;
