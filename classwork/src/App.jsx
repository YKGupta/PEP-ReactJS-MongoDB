import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Day 16/Blog';
import Post from './Day 16/Post';

const App = () => {
	return (
		<Router>
			<Link to='/blog'>Blog</Link>
			<Routes>
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/:postID' element={<Post />} />
			</Routes>
		</Router>
	);
}

export default App;
