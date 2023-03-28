import Header from './components/header/Header';
import Logos from './components/logos/Logos';
import Properties from './components/porperties/Properties';
import Price from './components/price/Price';
import Solving from './components/solving/Solving';

const App = () => {
	return (
		<div>
			<Header />
			<Logos />
			<Solving />
			<Properties />
			<Price />
		</div>
	);
};

export default App;
