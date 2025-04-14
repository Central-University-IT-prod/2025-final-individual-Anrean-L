import logo from '../assets/logo.svg';
import './Logo.css';

const Logo = () => {
	return (
		<div className='logo'>
			<img className='logo__image' src={logo} alt='SealFit logo' />
			<h1 className='logo__heading'>SealFit</h1>
		</div>
	);
};

export default Logo;
