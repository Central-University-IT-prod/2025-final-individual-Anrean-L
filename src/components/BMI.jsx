import './BMI.css';

const BMI = ({ h, w }) => {
	const bmi = (w * 10000) / h / h;
	let className = 'normal';
	if (bmi <= 18.5) className = 'light-def';
	if (bmi <= 16) className = 'def';
	if (bmi >= 25) className = 'light-prof';
	if (bmi >= 30) className = 'prof';
	if (bmi >= 35) className = 'heavy-prof';
	if (bmi >= 40) className = 'obesity';
	return (
		<div className={`bmi bmi__${className}`}>
			<p>ИМТ:</p>
			<span>{bmi.toFixed(2)}</span>
		</div>
	);
};

export default BMI;
