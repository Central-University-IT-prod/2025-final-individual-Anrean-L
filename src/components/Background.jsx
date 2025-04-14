import './Background.css';

const Background = ({ image, color, children }) => {
	return (
		<div
			style={{
				backgroundImage: image ? `url(${image})` : 'none',
				backgroundColor: color || 'none',
			}}
			className='background'
		>
			{children}
		</div>
	);
};

export default Background;
