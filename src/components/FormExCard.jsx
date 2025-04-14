import { useSelector } from 'react-redux';
import declension from '../moduls/declension';
import { getMoney } from '../moduls/calculateEx';
import { processFloat, processInteger } from '../moduls/processInput';
import InfoImgText from './InfoImgText';
import Input from './Input';
import './FormExCard.css';
import img from '../assets/money_dark.svg';
import close from '../assets/close.svg';

const FormExCard = ({ id, val, del, update, w }) => {
	const ex = useSelector(state => state.exercises.list[id]);
	return (
		<li className='form-ex-card'>
			<img src={ex.img || '/examples/ex1.jpg'} alt={ex.name} />
			<div className='form-ex-card__info'>
				<h2>{ex.name}</h2>
				<Input
					type='number'
					val={val}
					name='time'
					label={ex.type === 't' ? 'Время (в секундах): ' : 'Число повторений:'}
					onChange={e => update({ val: processInteger(e) })}
				/>
				{ex.type === 'w' ? (
					<Input type='number' val={w} name='w' label='Вес (в кг): ' onChange={e => update({ w: processFloat(e) })} />
				) : (
					''
				)}
				<div className='form-ex-card__line'>
					<InfoImgText
						img={img}
						text={Math.round(getMoney(ex, val)) + ' ' + declension.coins(Math.round(getMoney(ex, val)))}
					/>
					<button onClick={del}>
						<img src={close} alt='remove' />
					</button>
				</div>
			</div>
		</li>
	);
};

export default FormExCard;
