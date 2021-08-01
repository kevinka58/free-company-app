import FreeCompanyListing from '../../components/FreeCompanyListing/FreeCompanyListing'
import React from 'react';

export default function FreeCompanyListingPage(props) {

    return (
        <>
        <h1>Free Company Listing</h1>  
        <div>
            {props.freeCompanies.map(freeCompany => (
                <FreeCompanyListing freeCompany={freeCompany} 
                key={freeCompany._id}
                handleDeleteFreeCompany={props.handleDeleteFreeCompany}
                 />
                 ))}
            
            </div>   
            </>   


    )
}