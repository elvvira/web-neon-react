import style from './list.module.scss';

const List = ({ text }) => {
	return (
		<div className={style.container}>
			<img className={style.icon} src='/public/images/check.svg' alt='' />
			<p>{text}</p>
		</div>
	);
};
export default List;
