import { getToken } from './users-service';

const BASE_URL = '/api';

export function getAll() {
	return sendRequest(BASE_URL);
}

export function getById(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}

export function create(newCommentData, freeCompanyId){
	return sendRequest(`${BASE_URL}/freeCompanies/${freeCompanyId}/comments`, 'POST', newCommentData)
	
}

export function update(updatedPuppy){
	return sendRequest(`${BASE_URL}/${updatedPuppy._id}`, 'PUT', updatedPuppy)
}

export function deleteOne(id){
	return sendRequest(`/comments/${id}`, 'DELETE')
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