import { createSlice } from '@reduxjs/toolkit';
import trainsData from '../initialData/trains.json';
import { nanoid } from 'nanoid';

const initialState = {
	list: trainsData,
};

const trainsSlice = createSlice({
	name: 'trains',
	initialState,
	reducers: {
		addTrain: (state, action) => {
			state.list[nanoid()] = action.payload;
		},
		removeTrain: (state, action) => {
			delete state.list[action.payload];
		},
		updateTrain: (state, action) => {
			state.list[action.payload.id] = action.payload.data;
		},
	},
});

export const { addTrain, removeTrain, updateTrain } = trainsSlice.actions;
export default trainsSlice.reducer;
