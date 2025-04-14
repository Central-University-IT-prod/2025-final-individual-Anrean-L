import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import backImg from '../assets/back.svg';
import './HeaderBack.css';

const HeaderBack = ({ title, to }) => {
	return (
		<div className='header-back'>
			<Link to={to} className='header-back__action'>
				<img src={backImg} alt='back' />
			</Link>
			<Heading>{title}</Heading>
		</div>
	);
};

export default HeaderBack;
