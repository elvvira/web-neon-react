import { SolvingInfo } from '../../constants/info';
import SolvingCards from '../solving-cards/SolvingCards';
import style from './solving.module.scss';

const Solving = () => {
	return (
		<div className={style.container}>
			<h2 className={style.title}>Focus on solving bigger problems</h2>
			<img className={style.image} src='/public/images/features.svg' alt='' />
			<div>
				{SolvingInfo.map(card => {
					return <SolvingCards key={card.id} {...card} />;
				})}
			</div>
		</div>
	);
};
export default Solving;
