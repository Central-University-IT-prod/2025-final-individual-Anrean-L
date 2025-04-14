import { processFloat } from '../moduls/processInput';
import Calendar from 'react-calendar';
import Input from './Input';
import './CalendarSection.css';

const CalendarSection = ({
	selectedDate,
	setSelectedDate,
	selectedDayData,
	selectedDayTrainings,
	inputCalories,
	setInputCalories,
	handleCaloriesChange,
	selectedDateString,
}) => (
	<div className='calendar-section'>
		<Calendar onChange={setSelectedDate} className='calendar-section__calendar' />
		{selectedDate && (
			<div className='calendar-section__day-info'>
				<h3>{selectedDateString}</h3>
				<p>Набрано: {selectedDayData.consumed} ккал</p>
				<p>Потеряно: {selectedDayData.burned} ккал</p>
				<p>Тренировки:</p>
				<ul>
					{selectedDayTrainings.length > 0 ? (
						selectedDayTrainings.map((t, index) => (
							<li key={index}>
								{t.name} — {t.calories} ккал
							</li>
						))
					) : (
						<p>Нет тренировок</p>
					)}
				</ul>
				<Input
					type='number'
					val={inputCalories}
					name='calories'
					onChange={val => setInputCalories(processFloat(val))}
					placeholder='Введите калории'
				/>
				<button className='calendar-section__button' onClick={handleCaloriesChange}>
					Записать
				</button>
			</div>
		)}
	</div>
);

export default CalendarSection;
