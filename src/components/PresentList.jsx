import './PresentList.css';

const PresentList = ({ list, title }) => {
	return (
		<div className='present-list'>
			<strong>{title}</strong>
			{list.map(item => (
				<span key={item} className='present-list__item'>
					{item}
				</span>
			))}
		</div>
	);
};

export default PresentList;
