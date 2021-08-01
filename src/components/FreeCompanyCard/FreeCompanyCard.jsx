import React from 'react';
import { Link } from 'react-router-dom';

function FreeCompanyCard({ freeCompany }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{freeCompany.companyName}</h3>
			</div>
			<div className='panel-body'>
            <div>FREE COMPANY NAME: {freeCompany.companyName}</div> 
            <div>Company Tag: -{freeCompany.companyTag}-</div>
            <div>SERVER NAME: {freeCompany.serverName}</div>
            <div># OF MEMBERS: {freeCompany.companyPop}</div>
            <div>RANK: {freeCompany.rank}</div>
            <div>GRAND COMPANY: {freeCompany.grandCompany}</div>
            <div><em>{freeCompany.companyMotto}</em></div>
				{/* <dl>
					<dt>Company Tag:</dt>
					<dd>{freeCompany.companyTag}</dd>
					<dt>SERVER NAME:</dt>
					<dd>{freeCompany.serverName}</dd>
					<dt>Active Members:</dt>
					<dd>{freeCompany.companyPop}</dd>
					<dt>Company Rank</dt>
					<dd>{freeCompany.rank}</dd>
					<dt>Grand Company:</dt>
					<dd>{freeCompany.grandCompany}</dd>
				</dl> */}
			</div>
			<div className='panel-footer'>
				<Link to='freeCompanies/listing'>RETURN TO LIST</Link>
			</div>
		</div>
	);
}

export default FreeCompanyCard;
