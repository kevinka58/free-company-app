import { getToken } from './users-service';

const BASE_URL = '/api/freeCompanies';

export function getAll() {
	return sendRequest(BASE_URL);
}

export function getById(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}

export function create(freeCompany) {
	return sendRequest(BASE_URL,'POST', freeCompany);
}

export function update(updatedFreeCompany){
	return sendRequest(`${BASE_URL}/${updatedFreeCompany._id}`, 'PUT', updatedFreeCompany)
}

export function deleteOne(id){
	return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

async function sendRequest(url, method = 'GET', payload = null) {
	const options = { method };
	if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	}
	const token = getToken();
	console.log('token', token)
	if (token) {
		options.headers = options.headers || {};
		options.headers.Authorization = `Bearer ${token}`;
	}
	const res = await fetch(url, options);
	if (res.ok) return res.json();
	throw new Error('Bad Request');
}