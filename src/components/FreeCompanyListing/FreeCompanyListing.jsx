import React from 'react';
import { Link } from 'react-router-dom';

export default function FreeCompanyListing({ freeCompany, handleDeleteFreeCompany }) {
    return (
        <div class="text-white bg-primary mb-3 bg-opacity-90" style={{ width: 350}}>
            <div class="card-header">
                <h3>FREE COMPANY</h3>
            </div>
        <div class='card-body' >
            <div>FREE COMPANY NAME: {freeCompany.companyName}</div> 
            <div>Company Tag: -{freeCompany.companyTag}-</div>
            <div>SERVER NAME: {freeCompany.serverName}</div>
            <div># OF MEMBERS: {freeCompany.companyPop}</div>
            <div>RANK: {freeCompany.rank}</div>
            <div>GRAND COMPANY: {freeCompany.grandCompany}</div>
            <div><em>"{freeCompany.companyMotto}"</em></div>
                <Link className='btn btn-light'
                to={
                    {
                        pathname: '/details',
                        state: { freeCompany }
                    }
                }
                >
                    APPLY
                </Link>
                &nbsp; | &nbsp;
                <Link
					className='btn btn-light'
					to={{
                        pathname: '/edit',
						state: { freeCompany },
					}}
                    >
					EDIT
				</Link>
                &nbsp; | &nbsp;
				<button
					className='btn btn-light'
					onClick={() => handleDeleteFreeCompany(freeCompany._id)}
                    >
					DELETE
				</button>
			</div>
                    </div>
	);
}
