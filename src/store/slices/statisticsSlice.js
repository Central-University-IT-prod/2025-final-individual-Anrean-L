import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	trainingHistory: [],
	dailyCalories: {},
	dailyTrainings: {},
};

const statisticsSlice = createSlice({
	name: 'statistics',
	initialState,
	reducers: {
		addTrain: (state, action) => {
			const { date, name, calories } = action.payload;
			state.trainingHistory.push({ date, name, calories });

			if (!state.dailyCalories[date]) {
				state.dailyCalories[date] = { consumed: 0, burned: 0 };
			}
			state.dailyCalories[date].burned += calories;

			state.dailyTrainings[date] = (state.dailyTrainings[date] || 0) + 1;
		},
		updateConsumedCalories: (state, action) => {
			const { date, calories } = action.payload;
			if (!state.dailyCalories[date]) {
				state.dailyCalories[date] = { consumed: 0, burned: 0 };
			}
			state.dailyCalories[date].consumed = calories;
		},
	},
});

export const { addTrain, updateConsumedCalories } = statisticsSlice.actions;
export default statisticsSlice.reducer;
