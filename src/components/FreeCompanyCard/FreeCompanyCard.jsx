import React from 'react';
import { Link } from 'react-router-dom';

function FreeCompanyCard({ freeCompany }) {
	return (
		<div class="card text-white bg-primary mb-3 bg-opacity-90" style={{ width: 350}}>
			<div class="card-header">
				<h3 className='panel-title'>{freeCompany.companyName}</h3>
			</div>
			<div class='card-body'>
            <div>FREE COMPANY NAME: {freeCompany.companyName}</div> 
            <div>Company Tag: -{freeCompany.companyTag}-</div>
            <div>SERVER NAME: {freeCompany.serverName}</div>
            <div># OF MEMBERS: {freeCompany.companyPop}</div>
            <div>RANK: {freeCompany.rank}</div>
            <div>GRAND COMPANY: {freeCompany.grandCompany}</div>
            <div><em>"{freeCompany.companyMotto}"</em></div>
			</div>
			<button class="btn btn-light">
				&nbsp;
				<Link to='freeCompanies/listing'>RETURN TO LIST</Link>
				&nbsp;
			</button>
		</div>
	);
}

export default FreeCompanyCard;
