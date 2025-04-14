import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyItem, equipItem } from '../store/slices/sealSlice';
import { addMoney } from '../store/slices/settingsSlice';
import coin from '../assets/money.svg';
import './SealShopTab.css';

const SealShopTab = ({ type }) => {
	const dispatch = useDispatch();
	const { staff, outfit } = useSelector(state => state.seal);
	const money = useSelector(state => state.settings.money);
	const [error, setError] = useState('ᅠᅠ');

	const items = [1, 2, 3].map(num => ({
		id: num,
		img: `/preview/${type}/${num}.svg`,
		owned: staff[type].includes(num),
		equipped: outfit[type] === num,
		price: 2000 * num,
	}));

	const handleBuy = (id, price) => {
		if (money >= price) {
			dispatch(buyItem({ type, id }));
			dispatch(addMoney(-price));
		} else {
			setError('Недостаточно денег!');
			setTimeout(() => setError('ᅠᅠ'), 2000);
		}
	};

	const handleEquip = id => {
		dispatch(equipItem({ type, id }));
	};

	return (
		<>
			<div className='seal-shop-tab'>
				{items.map(item => (
					<div key={item.id} className='seal-shop-tab__item'>
						<img src={item.img} alt={`Item ${item.id}`} />
						{item.owned ? (
							<button onClick={() => handleEquip(item.id)}>{item.equipped ? 'Надето' : 'Надеть'}</button>
						) : (
							<button onClick={() => handleBuy(item.id, item.price)}>
								{item.price} <img src={coin} alt='' />
							</button>
						)}
					</div>
				))}
			</div>
			<p className='error'>{error}</p>
		</>
	);
};

export default SealShopTab;
