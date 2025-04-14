import HeaderBack from '../components/HeaderBack';
import Input from '../components/Input';

const TrainFormHead = ({ train, change }) => (
	<>
		<HeaderBack title={train.name} to='/trains' />
		<Input
			val={train.name}
			name='train-name'
			type='text'
			onChange={name => change(name)}
			label='Название тренировки: '
			maxLength={50}
		/>
		<hr />
	</>
);

export default TrainFormHead;
