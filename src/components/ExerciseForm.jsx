import { processFloat } from '../moduls/processInput';
import Input from '../components/Input';
import ExerciseTypeSelect from '../components/ExerciseTypeSelect';
import ExerciseDifficulty from '../components/ExerciseDifficulty';
import EquipmentInput from '../components/EquipmentInput';
import MuscleGroupSelector from '../components/MuscleGroupSelector';

const ExerciseForm = ({ ex, change }) => (
	<>
		<Input
			val={ex.name}
			name='exercise-name'
			type='text'
			label='Название упражнения:'
			onChange={val => change({ name: val })}
			maxLength={50}
		/>
		<Input
			val={ex.description}
			name='desc'
			type='text'
			label='Описание:'
			onChange={val => change({ description: val })}
			maxLength={120}
		/>
		<Input
			val={ex.k}
			name='k'
			type='number'
			label='Калории, сжигаемые за секунду:'
			onChange={val => change({ k: processFloat(val) })}
		/>
		<ExerciseTypeSelect value={ex.type} onChange={val => change({ type: val })} />
		{ex.type !== 't' && (
			<Input
				val={ex.time}
				name='time'
				type='number'
				label='Время одного повтора (в секундах):'
				onChange={val => change({ time: processFloat(val) })}
			/>
		)}
		<ExerciseDifficulty value={ex.money} onChange={val => change({ money: val })} />
		<EquipmentInput equipment={ex.equipment} onChange={val => change({ equipment: val })} />
		<MuscleGroupSelector selected={ex.muscles} onChange={val => change({ muscles: val })} />
	</>
);

export default ExerciseForm;
