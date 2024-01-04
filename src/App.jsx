import { Route, Routes } from 'react-router'
import './App.css'
import Post from './components/Post'
import Main from './pages/main'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/posts/:id' element={<Post />} />
			</Routes>
		</div>
	)
}

export default App
