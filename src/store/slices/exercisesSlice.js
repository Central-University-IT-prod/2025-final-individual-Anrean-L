import { createSlice } from '@reduxjs/toolkit';
import exercisesData from '../initialData/exersizes.json';
import { nanoid } from 'nanoid';

const initialState = {
	list: exercisesData,
};

const exercisesSlice = createSlice({
	name: 'exercises',
	initialState,
	reducers: {
		addExercise: (state, action) => {
			state.list[nanoid()] = action.payload;
		},
		removeExercise: (state, action) => {
			delete state.list[action.payload];
		},
		updateExercise: (state, action) => {
			state.list[action.payload.id] = action.payload.data;
		},
	},
});

export const { addExercise, removeExercise, updateExercise } = exercisesSlice.actions;
export default exercisesSlice.reducer;
