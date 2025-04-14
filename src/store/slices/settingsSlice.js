import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		height: 170,
		weight: 70,
		delay: 15,
		money: 0,
		sound: 'no',
	},
	reducers: {
		updateSettings: (state, action) => {
			return { ...state, ...action.payload };
		},
		addMoney: (state, action) => {
			state.money += action.payload;
		},
	},
});

export const { updateSettings, addMoney, pushTrain } = settingsSlice.actions;
export default settingsSlice.reducer;
