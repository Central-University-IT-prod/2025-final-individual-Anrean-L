import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: 'Новая тренировка',
	exercises: [],
};

const addTrainSlice = createSlice({
	name: 'addTrain',
	initialState,
	reducers: {
		rename: (state, action) => {
			state.name = action.payload;
		},
		addExercise: (state, action) => {
			state.exercises.push(action.payload);
		},
		removeExercise: (state, action) => {
			state.exercises.splice(action.payload, 1);
		},
		updateExercise: (state, action) => {
			state.exercises[action.payload.i] = {
				...state.exercises[action.payload.i],
				...action.payload.ex,
			};
		},
		setData: (state, action) => {
			return { ...state, ...action.payload };
		},
		resetTrain: () => initialState,
	},
});

export const { rename, addExercise, removeExercise, updateExercise, setData, resetTrain } = addTrainSlice.actions;
export default addTrainSlice.reducer;
