import { Routes, Route } from 'react-router-dom';

import Start from './pages/Start';
import TrainsPage from './pages/TrainsPage';
import ExercisesPage from './pages/ExercisesPage';
import AddTrain from './pages/AddTrainPage';
import AddExPage from './pages/AddExPage';
import ExerciseInfoPage from './pages/ExerciseInfoPage';
import EditExercisePage from './pages/EditExercisePage';
import TrainFlow from './pages/TrainFlow';
import EditTrainPage from './pages/EditTrainPage';
import ProfilePage from './pages/ProfilePage';
import StatisticsScreen from './pages/StatisticsScreen';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Start />}></Route>
			<Route path='/trains' element={<TrainsPage />}></Route>
			<Route path='/trains/:id' element={<TrainFlow />}></Route>
			<Route path='/trains/add' element={<AddTrain />}></Route>
			<Route path='/trains/edit/:id' element={<EditTrainPage />}></Route>
			<Route path='/exercises' element={<ExercisesPage />}></Route>
			<Route path='/exercises/:id' element={<ExerciseInfoPage />}></Route>
			<Route path='/exercises/add' element={<AddExPage />}></Route>
			<Route path='/exercises/edit/:id' element={<EditExercisePage />}></Route>
			<Route path='/profile' element={<ProfilePage />}></Route>
			<Route path='/statistics' element={<StatisticsScreen />}></Route>
		</Routes>
	);
}

export default App;
