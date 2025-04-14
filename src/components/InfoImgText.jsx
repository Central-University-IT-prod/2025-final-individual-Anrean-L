import './InfoImgText.css';

const InfoImgText = ({ img, text }) => {
	return (
		<p className='info-img-text'>
			<img src={img} alt='icon' /> {text}{' '}
		</p>
	);
};

export default InfoImgText;
