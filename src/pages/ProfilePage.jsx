import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'motion/react';
import NavMenu from '../components/NavMenu';
import Seal from '../components/Seal';
import SealShop from '../components/SealShop';
import InfoImgText from '../components/InfoImgText';
import Input from '../components/Input';
import BMI from '../components/BMI';
import Button from '../components/Button';
import { processInteger } from '../moduls/processInput';
import coin from '../assets/money_dark.svg';
import './ProfilePage.css';
import { updateSettings } from '../store/slices/settingsSlice';
import BackupControls from '../components/BackupControls';

const SOUND_MODS = [
	['no', 'Без звука'],
	['normal', 'Стандарт'],
	['seal', 'Тюлень'],
];

const ProfileForm = () => {
	const settings = useSelector(state => state.settings);
	const [changedSettings, setSettings] = useState({
		height: settings.height,
		weight: settings.weight,
		delay: settings.delay,
		sound: settings.sound,
	});
	const [error, setError] = useState('ᅠᅠ');
	const dispatch = useDispatch();

	const handleSave = () => {
		if (Object.values(changedSettings).some(val => val === '')) {
			setError('Все поля должны быть заполнены');
			setTimeout(() => setError('ᅠᅠ'), 2000);
		} else if (!changedSettings.height || !changedSettings.weight) {
			setError('Вес и рост должны быть больше 0');
			setTimeout(() => setError('ᅠᅠ'), 2000);
		} else dispatch(updateSettings(changedSettings));
	};

	return (
		<>
			<div className='profile-page__line'>
				<div className='profile-page__input-box'>
					<Input
						val={changedSettings.height}
						name='height'
						type='number'
						label='Рост:'
						onChange={val => setSettings({ ...changedSettings, height: processInteger(val) })}
					/>
					<Input
						val={changedSettings.weight}
						name='weight'
						type='number'
						label='Вес:'
						onChange={val => setSettings({ ...changedSettings, weight: processInteger(val) })}
					/>
				</div>
				<BMI h={settings.height} w={settings.weight} />
			</div>
			<Input
				val={changedSettings.delay}
				name='delay'
				type='number'
				label='Время для отдыха (в секундах):'
				onChange={val => setSettings({ ...changedSettings, delay: processInteger(val) })}
			/>
			<div className='profile-page__select'>
				{SOUND_MODS.map(([id, text]) => (
					<button key={id} onClick={() => setSettings({ ...changedSettings, sound: id })}>
						<span>{text}</span>
						{changedSettings.sound === id && (
							<motion.div layoutId='profile-page__indicator' className='profile-page__indicator' />
						)}
					</button>
				))}
			</div>

			<p className='error'>{error}</p>
			<Button fullsize action={handleSave}>
				Сохранить
			</Button>
		</>
	);
};

const ProfilePage = () => {
	const [isShopOpen, setIsShopOpen] = useState(false);
	const money = useSelector(state => state.settings.money);

	return (
		<main className='profile-page'>
			<Seal />
			<div className='profile-page__line'>
				<button className='profile-page__open-shop' onClick={() => setIsShopOpen(true)}>
					Открыть магазин
				</button>
				<InfoImgText img={coin} text={Math.floor(money)} />
			</div>
			<SealShop onClose={() => setIsShopOpen(false)} isOpen={isShopOpen} />
			<hr />
			<ProfileForm />
			<hr />
			<BackupControls />
			<NavMenu />
		</main>
	);
};

export default ProfilePage;
