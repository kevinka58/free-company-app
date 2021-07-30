import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
	const [user, setUser] = useState(getUser());

	return (
		<main className='App'>
				<>
				<NavBar user={user} setUser={setUser}/>
					<Switch>
					<HomePage />
						<Route path='/orders/new'>
							<NewOrderPage user={user} setUser={setUser} />
						</Route>
						<Route path='/orders'>
							<OrderHistoryPage />
						</Route>
						<Redirect to='/orders' />
						<Route path='/auth'>
						<AuthPage setUser={setUser} />
						</Route>
					</Switch>
				</>
		</main>
	);
}
