import style from './logos.module.scss';

const Logos = () => {
	return (
		<div className={style.container}>
			<img src='/public/images/facebook.svg' alt='' />
			<img src='/public/images/tinder.svg' alt='' />
			<img src='/public/images/airbnb.svg' alt='' />
			<img src='/public/images/hubspot.svg' alt='' />
			<img className={style.amazon} src='/public/images/amazon.svg' alt='' />
		</div>
	);
};
export default Logos;
