import { Redirect, Route } from 'wouter'
import './App.css'
import Home from './pages/Home'

function App() {
	return (
		<>
			<Route path="/shortly" component={Home} />
			<Redirect to="/shortly" />
		</>
	)
}

export default App
