import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewFreeCompany from '../NewFreeCompany/NewFreeCompany';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar'
import FreeCompanyListing from '../../components/FreeCompanyListing/FreeCompanyListing';
import * as freeCompanyAPI from '../../utilities/freeCompanies-api'

export default function App() {
	const [user, setUser] = useState(getUser());
	const [freeCompanies, setFreeCompanies] = useState([])

	async function handleAddFreeCompany (newFreeCompData){
		const newFreeComp = await freeCompanyAPI.create(newFreeCompData);
		setFreeCompanies([...freeCompanies, newFreeComp])
	  }

	async function handleDeleteFreeCompany(id) {
		await freeCompanyAPI.deleteOne(id);
		setFreeCompanies(freeCompanies.filter(freeCompany => freeCompany._id !== id));
	}


	return (
		<main className='App'>
			{user ? (
				<>
				<NavBar user={user} setUser={setUser} />
					<Switch>
						<HomePage />
						<Route exact path="/freeComanpies">
							<FreeCompanyListing freeCompanies={freeCompanies}
							handleDeleteFreeCompany={handleDeleteFreeCompany}/>
						</Route>
						<Route path='/freeCompanies/new'>
							<NewFreeCompany handleAddFreeCompany={handleAddFreeCompany}/>
						</Route>
						<Route path='/orders'>
							<OrderHistoryPage />
						</Route>
						<Redirect to='/orders' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
