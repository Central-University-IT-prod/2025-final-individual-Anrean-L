import FormExCard from './FormExCard';
import './TrainFormExs.css';

const TrainFormExs = ({ train, del, update }) => {
	return (
		<ul className='train-form-exs'>
			{train.exercises.map(({ id, val, w }, i) => (
				<FormExCard
					id={id}
					val={val}
					key={id + i}
					del={() => del(i)}
					update={ob => update({ i, ex: ob })}
					w={w}
				/>
			))}
		</ul>
	);
};

export default TrainFormExs;
