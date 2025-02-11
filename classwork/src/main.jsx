import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Day 19/Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Day 19/Home.jsx'
import About from './Day 19/About.jsx'
import Contact from './Day 19/Contact.jsx'
import Error from './Day 19/Error.jsx'
import { RandomUserLoader } from './Day 19/RandomUserLoader.js'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: RandomUserLoader
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/contact',
				element: <Contact />
			},
			{
				path: '*',
				element: <Error />
			}
		]
	}
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={Router} />
	</StrictMode>
)