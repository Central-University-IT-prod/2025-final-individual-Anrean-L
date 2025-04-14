import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-calendar/dist/Calendar.css';
import { updateConsumedCalories } from '../store/slices/statisticsSlice';
import NavMenu from '../components/NavMenu';
import Heading from '../components/Heading';
import Input from '../components/Input';
import StatisticsCharts from '../components/StatisticsCharts';
import CalendarSection from '../components/CalendarSection';
import './StatisticsScreen.css';
import { processFloat } from '../moduls/processInput';

const StatisticsScreen = () => {
	const dispatch = useDispatch();
	const trainingHistory = useSelector(state => state.statistics.trainingHistory);
	const dailyCalories = useSelector(state => state.statistics.dailyCalories);
	const dailyTrainings = useSelector(state => state.statistics.dailyTrainings);

	const [selectedDate, setSelectedDate] = useState(new Date());
	const [inputCalories, setInputCalories] = useState('');

	const selectedDateString = selectedDate.toLocaleDateString('en-CA');
	const selectedDayData = dailyCalories[selectedDateString] || { consumed: 0, burned: 0 };
	const selectedDayTrainings = trainingHistory.filter(t => t.date === selectedDateString);

	const handleCaloriesChange = () => {
		dispatch(updateConsumedCalories({ date: selectedDateString, calories: Number(inputCalories) }));
		setInputCalories('');
	};

	const monthlyData = Object.keys(dailyCalories)
		.filter(date => new Date(date) >= new Date(new Date().setDate(1)))
		.map(date => ({
			date,
			burned: dailyCalories[date]?.burned || 0,
			consumed: dailyCalories[date]?.consumed || 0,
			workouts: dailyTrainings[date] || 0,
		}));
	console.log(monthlyData);

	return (
		<main className='statistics'>
			<Heading>Статистика</Heading>
			<div className='statistics__calories-input'>
				<p>
					Сегодня: набрано {selectedDayData.consumed} калорий, потеряно {selectedDayData.burned} калорий
				</p>
				<Input
					type='number'
					val={inputCalories}
					name='today-calories'
					onChange={val => setInputCalories(processFloat(val))}
					placeholder='Введите калории'
				/>
				<button onClick={handleCaloriesChange}>Записать</button>
			</div>

			{monthlyData.length > 0 && <StatisticsCharts monthlyData={monthlyData} />}

			<CalendarSection
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				selectedDayData={selectedDayData}
				selectedDayTrainings={selectedDayTrainings}
				inputCalories={inputCalories}
				setInputCalories={setInputCalories}
				handleCaloriesChange={handleCaloriesChange}
				selectedDateString={selectedDateString}
			/>
			<NavMenu />
		</main>
	);
};

export default StatisticsScreen;
