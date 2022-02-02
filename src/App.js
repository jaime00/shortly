import { Redirect, Route } from 'wouter'
import './App.css'
import Home from './pages/Home'

function App() {
	return (
		<>
			<Route path="/" component={Home} />
			<Redirect to="/" />
		</>
	)
}

export default App
