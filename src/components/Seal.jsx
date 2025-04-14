import { useSelector } from 'react-redux';
import './Seal.css';

const Seal = () => {
	const outfit = useSelector(state => state.seal.outfit);
	const level = useSelector(state => state.seal.level);
	return (
		<div className='seal'>
			{outfit.color && <div className={`seal__color`} style={{ background: outfit.color }} />}
			<img src={`/seals/seal${level}.svg`} alt='Тюлень' />
			{outfit.glasses && <img src={`/glasses/${outfit.glasses}.svg`} alt='Очки' />}
			{outfit.hat && <img src={`/hat/${outfit.hat}.svg`} alt='Шапка' />}
			{outfit.bracelet && <img src={`/bracelet/${outfit.bracelet}.svg`} alt='Браслет' />}
		</div>
	);
};

export default Seal;
