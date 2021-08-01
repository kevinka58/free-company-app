import React from 'react';
import { Link } from 'react-router-dom';

export default function FreeCompanyListing({ freeCompany, handleDeleteFreeCompany }) {
    return (
        <div className="FreeCompanyListing">
            <div>FREE COMPANY NAME: {freeCompany.companyName}</div> 
            <div>Company Tag: -{freeCompany.companyTag}-</div>
            <div>SERVER NAME: {freeCompany.serverName}</div>
            <div># OF MEMBERS: {freeCompany.companyPop}</div>
            <div>RANK: {freeCompany.rank}</div>
            <div>GRAND COMPANY: {freeCompany.grandCompany}</div>
            <div><em>"{freeCompany.companyMotto}"</em></div>
                <Link className='btn btn-xs btn-info'
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
					className='btn btn-xs btn-warning'
					to={{
						pathname: '/edit',
						state: { freeCompany },
					}}
				>
					EDIT
				</Link>
                &nbsp; | &nbsp;
				<button
					className='btn btn-xs btn-danger margin-left-10'
					onClick={() => handleDeleteFreeCompany(freeCompany._id)}
				>
					DELETE
				</button>
			</div>
	);
}
