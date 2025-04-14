import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const TrainsChart = ({ monthlyData }) => (
	<ResponsiveContainer width='100%' height={200}>
		<LineChart data={monthlyData}>
			<XAxis dataKey='date' />
			<YAxis />
			<Tooltip />
			<Line type='monotone' dataKey='workouts' stroke='#007bff' strokeWidth={2} />
		</LineChart>
	</ResponsiveContainer>
);

const CaloriesChart = ({ monthlyData }) => (
	<ResponsiveContainer width='100%' height={200}>
		<BarChart data={monthlyData}>
			<XAxis dataKey='date' />
			<YAxis />
			<Tooltip />
			<Bar dataKey='consumed' fill='#ff7f50' />
			<Bar dataKey='burned' fill='#009bef' />
		</BarChart>
	</ResponsiveContainer>
);

const StatisticsCharts = ({ monthlyData }) => {
	return (
		<div className='charts'>
			<h3>График тренировок</h3>
			<TrainsChart monthlyData={monthlyData} />

			<h3>Калории</h3>
			<CaloriesChart monthlyData={monthlyData} />
		</div>
	);
};

export default StatisticsCharts;
