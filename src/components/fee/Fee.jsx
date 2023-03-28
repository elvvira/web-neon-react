import Button from '../button/Button';
import style from './fee.module.scss';
import List from '../list/List';

const Fee = ({ type, price, includes }) => {
	return (
		<div className={style.container}>
			<h3>{type}</h3>
			<div>
				<span className={style.dollar}>$</span>{' '}
				<span className={style.price}>{price}</span>{' '}
				<span className={style.month}>/mo</span>{' '}
			</div>
			<p className={style.text}>
				For teams building apps for many public & private users.
			</p>
			<Button></Button>
			<p>{includes}</p>
            {
                PriceList.listItme.map()
            }
			<List></List>
		</div>
	);
};
export default Fee;
