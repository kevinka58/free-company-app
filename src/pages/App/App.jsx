import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewFreeCompany from '../NewFreeCompany/NewFreeCompany';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar'
import FreeCompanyListingPage from '../../pages/FreeCompanyListingPage/FreeCompanyListingPage';
import * as freeCompanyAPI from '../../utilities/freeCompanies-api'
import FreeCompanyDetailPage from '../../pages/FreeCompanyDetailPage/FreeCompanyDetailPage'
import EditFreeCompany from '../../pages/EditFreeCompanyPage/EditFreeCompanyPage';

export default function App() {
	const [user, setUser] = useState(getUser());
	const [freeCompanies, setFreeCompanies] = useState([])
	const history = useHistory();

	useEffect(() => {
		async function getFreeCompanies() {
			const freeCompanies = await freeCompanyAPI.getAll();
			setFreeCompanies(freeCompanies);
		}
		getFreeCompanies();
	}, []);

	useEffect(() => {
		history.push('/listing');
	}, [freeCompanies, history]);


	async function handleAddFreeCompany (newFreeCompData){
		const newFreeComp = await freeCompanyAPI.create(newFreeCompData);
		setFreeCompanies([...freeCompanies, newFreeComp])
	  }

	async function handleDeleteFreeCompany(id) {
		await freeCompanyAPI.deleteOne(id);
		setFreeCompanies(freeCompanies.filter(freeCompany => freeCompany._id !== id));
	}

	async function handleUpdateFreeCompany (updatedFreeCompanyData){
		const updatedFreeCompany = await freeCompanyAPI.update(updatedFreeCompanyData)
		const newFreeCompaniesArray = freeCompanies.map(f =>
		   f._id === updatedFreeCompany._id ? updatedFreeCompany : f
		   )
		   setFreeCompanies(newFreeCompaniesArray);
	}

	return (
		<main className='App'>
			{user ? (
				<>
				<NavBar user={user} setUser={setUser} />
					<Switch>
						<HomePage exact path ="/freeCompanies"/>
						<Route path='/freeCompanies/new'>
							<NewFreeCompany handleAddFreeCompany={handleAddFreeCompany}/>
						</Route>
						<Route exact path="/freeCompanies/listing">
							<FreeCompanyListingPage freeCompanies={freeCompanies}
							handleDeleteFreeCompany={handleDeleteFreeCompany}/>
						</Route>
						<Route exact path="/details">
							<FreeCompanyDetailPage />
						</Route>
						<Route exact path="/edit">
							<EditFreeCompany handleUpdateFreeCompany={handleUpdateFreeCompany}/>
						</Route>
						<Redirect to='/freeCompanies' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
