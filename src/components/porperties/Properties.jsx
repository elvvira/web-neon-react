import { PropertiesInfo, PropertiesList } from '../../constants/info';
import List from '../list/List';
import PropertiesText from '../properties-text/PorpertiesText';
import style from './properties.module.scss';

const Properties = () => {
	return (
		<div className={style.container}>
			<PropertiesText
				title={PropertiesInfo[0].title}
				text={PropertiesInfo[0].text}
			/>
			<img
				className={style.image}
				src='/public/images/features-02.png'
				alt=''
			/>
			<PropertiesText
				title={PropertiesInfo[1].title}
				text={PropertiesInfo[1].text}
			/>
			<div className={style.list}>
				{PropertiesList.map(card => {
					return <List key={card.id} {...card} />;
				})}
			</div>
		</div>
	);
};
export default Properties;
