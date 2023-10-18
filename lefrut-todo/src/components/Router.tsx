import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='*' element={<div>Not found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
