import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: 'Новое упражнение',
	description: '',
	type: 'r',
	time: 2,
	money: 3,
	k: 5,
	equipment: [],
	muscles: [],
};

const addExerciseSlice = createSlice({
	name: 'addExercise',
	initialState,
	reducers: {
		setDataEx: (state, action) => {
			return { ...state, ...action.payload };
		},
		resetEx: () => initialState,
	},
});

export const { setDataEx, resetEx } = addExerciseSlice.actions;
export default addExerciseSlice.reducer;
