import { store } from '../store';

const getTime = (ex, val) => (ex.type == 't' ? val : ex.time * val);

const getMoney = (ex, val) => {
	return ex.money * getTime(ex, val);
};

const getK = (ex, val) => {
	return ex.k * getTime(ex, val);
};

const processEx = id => {
	const state = store.getState();
	const weight = state.settings.weight;
	const height = state.settings.height;
	const ex = state.exercises.list[id];
	const item = {
		id,
		val: Math.ceil(((height / weight) * 30) / ex.money / 1.2),
	};
	if (ex.type == 'w') item.w = Math.ceil((height * weight) / 4000);
	return item;
};

export { getMoney, getK, getTime, processEx };
