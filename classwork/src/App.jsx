import { useContext } from 'react';
import './App.css';
import Context from './Day 11/Context';

function App() {

	const { name } = useContext(Context);

	return (
		<>
			My name is {name}
		</>
	);
}

export default App;
