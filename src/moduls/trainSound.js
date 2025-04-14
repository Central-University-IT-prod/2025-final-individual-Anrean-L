import { store } from '../store';
import soundSeal from '../assets/rest.mp3';
import soundNormal from '../assets/normal.wav';
import soundComplete from '../assets/complete.mp3';

const trainSound = step => {
	const mode = store.getState().settings.sound;
	if (mode === 'no') return;
	if (step) new Audio(soundComplete).play();
	else new Audio(mode === 'seal' ? soundSeal : soundNormal).play();
};

export default trainSound;
