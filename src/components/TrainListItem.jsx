import declension from '../moduls/declension';
import InfoImgText from './InfoImgText';
import './TrainListItem.css';

import timeImg from '../assets/time.svg';
import exImg from '../assets/exercise.svg';
import coinImg from '../assets/money.svg';
import arrow from '../assets/arrow.svg';
import example from '/examples/train.jpg';

const infoConfig = train => [
	{ img: timeImg, text: `${train.time} ${declension.minutes(train.time)}` },
	{
		img: exImg,
		text: `${train.exercises.length} ${declension.exersize(train.exercises.length)}`,
	},
	{ img: coinImg, text: `${Math.floor(train.reward)} ${declension.coins(train.reward)}` },
];

const TrainListItem = ({ train, onClick }) => {
	return (
		<li className='train-list-item' style={{ backgroundImage: `url(${train.img || example})` }}>
			<div className='train-list-item__backdrop'>
				<h2 className='train-list-item__title'>{train.name}</h2>
				<div className='train-list-item__line'>
					{infoConfig(train).map((item, i) => (
						<InfoImgText key={i} img={item.img} text={item.text} />
					))}
					<button className='train-list-item__continue' onClick={onClick}>
						<img src={arrow} alt='icon' />
					</button>
				</div>
			</div>
		</li>
	);
};

export default TrainListItem;
