import { useRef, useState } from 'react';
import { persistor } from '../store';
import Button from './Button';
import './BackupControls.css';

const exportLocalStorage = () => {
	const data = JSON.stringify(localStorage);
	const blob = new Blob([data], { type: 'application/json' });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = 'backup.json';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};

const importLocalStorage = (event, setMes) => {
	const file = event.target.files[0];
	if (!file) return;

	const reader = new FileReader();
	reader.onload = async e => {
		try {
			const data = JSON.parse(e.target.result);

			await persistor.purge();

			Object.keys(data).forEach(key => {
				localStorage.setItem(key, data[key]);
			});

			setMes('Данные загружены! Перезагружаю страницу...');
			window.location.reload();
		} catch (error) {
			setMes('Ошибка при загрузке файла: ' + error);
		}
	};
	reader.readAsText(file);
};
const BackupControls = () => {
	const fileInputRef = useRef(null);
	const [mes, setMes] = useState('');
	return (
		<div className='backup-controls'>
			<p>
				Чтобы не потерять данные, Вы можете сохранить состояние приложения и загрузить его в случае необходимости. При
				загрузке старые данные будут утеряны!
			</p>
			<Button fullsize action={exportLocalStorage}>
				Сохранить данные
			</Button>
			<Button fullsize action={() => fileInputRef.current.click()}>
				Загрузить данные
			</Button>
			<input
				type='file'
				ref={fileInputRef}
				accept='application/json'
				style={{ display: 'none' }}
				onChange={e => importLocalStorage(e, setMes)}
			/>
			<p>{mes}</p>
		</div>
	);
};

export default BackupControls;
