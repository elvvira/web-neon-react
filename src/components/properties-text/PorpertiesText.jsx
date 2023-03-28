import style from './propertiesText.module.scss';

const PropertiesText = ({ title, text }) => {
	return (
		<div className={style.container}>
			<h2 className={style.title}>{title}</h2>
			<p className={style.text}>{text}</p>
		</div>
	);
};
export default PropertiesText;
