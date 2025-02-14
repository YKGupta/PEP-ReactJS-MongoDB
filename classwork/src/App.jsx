import { useState } from 'react';
import './App.css';
import UseContextExample from './Day 21/useContextExample';
import UseMemoExample from './Day 21/UseMemoExample';

const App = () => {

	const [ selectedHook, setSelectedHook ] = useState('useContext');

	return (
		<div>
			<h2>Happy Valentine&apos;s Day</h2>
			<label htmlFor="hook">Select your hook</label>
			<select name="hook" id="hook" value={selectedHook} onChange={(ev) => setSelectedHook(ev.target.value)}>
				<option value="useContext">useContext</option>
				<option value="useMemo">useMemo</option>
			</select>
			<hr />
			{ selectedHook === 'useContext' ? <UseContextExample /> : <UseMemoExample /> }
		</div>
	);
}

export default App;
