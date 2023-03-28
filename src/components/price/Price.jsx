import { FeeInfo, PropertiesInfo } from '../../constants/info';
import Fee from '../fee/Fee';
import PropertiesText from '../properties-text/PorpertiesText';
import style from './price.module.scss';

const Price = () => {
	return (
		<div className={style.container}>
			<PropertiesText
				title={PropertiesInfo[2].title}
				text={PropertiesInfo[2].text}
			/>
			<div className={style.fee}>
				{FeeInfo.map(card => {
					return <Fee key={card.id} {...card} />;
				})}
			</div>
		</div>
	);
};
export default Price;
