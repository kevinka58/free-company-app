import React from 'react';
import { Link } from 'react-router-dom';

export default function FreeCompanyListing({ freeCompany, handleDeleteFreeCompany }) {
    return (
        <div className="FreeCompanyListing">
            <div>FREE COMPANY NAME: {freeCompany.companyName}</div> 
            <div>Company Tag: -{freeCompany.companyTag}-</div>
            <div>SERVER NAME: {freeCompany.serverName}</div>
            <div># OF MEMMBERS{freeCompany.companyPop}</div>
            <div>RANK: {freeCompany.rank}</div>
            <div>GRAND COMPANY: {freeCompany.grandCompany}</div>
                <Link className='btn btn-xs btn-info'
                to={
                    {
                        pathname: '/details',
                        state: { freeCompany }
                    }
                }
                >
                    DETAILS 
                </Link>
                <Link
					className='btn btn-xs btn-warning'
					to={{
						pathname: '/edit',
						state: { freeCompany },
					}}
				>
					EDIT
				</Link>
				<button
					className='btn btn-xs btn-danger margin-left-10'
					onClick={() => handleDeleteFreeCompany(freeCompany._id)}
				>
					DELETE
				</button>
			</div>
	);
}
