import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	outfit: {
		color: 'LavenderBlush',
		glasses: null,
		hat: null,
		bracelet: null,
	},
	staff: {
		glasses: [],
		hat: [],
		bracelet: [],
	},
	level: 1,
};

const sealSlice = createSlice({
	name: 'addExercise',
	initialState,
	reducers: {
		buyItem: (state, action) => {
			const { type, id } = action.payload;
			if (!state.staff[type].includes(id)) {
				state.staff[type].push(id);
			}
		},
		equipItem: (state, action) => {
			const { type, id } = action.payload;
			state.outfit[type] = id;
		},
	},
});

export const { buyItem, equipItem } = sealSlice.actions;
export default sealSlice.reducer;
