import React from 'react';
import { useLocation } from 'react-router-dom';
import FreeCompanyCard from '../../components/FreeCompanyCard/FreeCompanyCard';

function FreeCompanyDetailPage(props) {
	// Refer to PuppyListItem to see how freeCompany is being passed via the <Link>
	// using the useLocation hook from react-router dom, to grab the
	// state, desctructering the freeCompany variable attached to state
	const {
		state: { freeCompany },
	} = useLocation();

	return (
		<>
			<h1>Free Company Details</h1>
			<FreeCompanyCard freeCompany={freeCompany} key={freeCompany._id} />
		</>
	);
}

export default FreeCompanyDetailPage;
