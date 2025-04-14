import { store } from '../store';
import toMinutes from './toMinutes';
import { getMoney, getK } from './calculateEx';

const processTrain = ({ name, exercises }) => {
	const state = store.getState();
	const exList = state.exercises.list;
	const delay = state.settings.delay;
	return {
		name,
		exercises,
		time: toMinutes(
			(exercises.length - 1) * delay +
				exercises.reduce(
					(acc, { id, val }) => (exList[id].type === 't' ? val : exList[id].time * val) + acc,
					0,
				),
		),
		reward: exercises.reduce((acc, { id, val }) => getMoney(exList[id], val) + acc, 0),
		k: exercises.reduce((acc, { id, val }) => getK(exList[id], val) + acc, 0),
	};
};

export default processTrain;
