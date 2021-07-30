import React from 'react';
import { Link } from 'react-router-dom';

export default function PuppyListItem({ puppy, handleDeletePuppy }) {
    return (
        <div className="PuppyListItem">
            <div><span type="bold">Puppy Name: {puppy.name}</span></div> 
            <div>{puppy.breed}</div>
            <div>{puppy.age}</div>
                <Link className='btn btn-xs btn-info'
                to={
                    {
                        pathname: '/details',
                        state: {puppy}
                    }
                }
                >
                    DETAILS 
                </Link>
                <Link
					className='btn btn-xs btn-warning'
					to={{
						pathname: '/edit',
						state: { puppy },
					}}
				>
					EDIT
				</Link>
				<button
					className='btn btn-xs btn-danger margin-left-10'
					onClick={() => handleDeletePuppy(puppy._id)}
				>
					DELETE
				</button>
			</div>
	);
}
