import style from './solvingCard.module.scss';

const SolvingCards = ({ src }) => {
	return (
		<div className={style.container}>
			<img src={src} alt='' />
			<h3 className={style.title}>Ready for the future</h3>
			<p className={style.description}>
				A flexible foundation that evolves with complex ecosystem.
			</p>
		</div>
	);
};

export default SolvingCards;
