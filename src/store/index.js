import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import exerciseReducer from './slices/exercisesSlice';
import trainsReducer from './slices/trainsSlice';
import addTrainReducer from './slices/addTrainSlice';
import addExerciseReducer from './slices/addExerciseSlice';
import settingsReducer from './slices/settingsSlice';
import sealReducer from './slices/sealSlice';
import statisticsReducer from './slices/statisticsSlice';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['addTrain', 'addExercise'],
};

const rootReducer = combineReducers({
	trains: trainsReducer,
	exercises: exerciseReducer,
	addTrain: addTrainReducer,
	addExercise: addExerciseReducer,
	settings: settingsReducer,
	seal: sealReducer,
	statistics: statisticsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
