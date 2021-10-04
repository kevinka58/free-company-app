import FreeCompanyListing from '../../components/FreeCompanyListing/FreeCompanyListing'
import React from 'react';
import './FreeCompanyListingPage.css'
export default function FreeCompanyListingPage(props) {

    return (
        <>
        <h1 class="titleContainer"><span class="titleColor">Free</span> Company Listing</h1>  
        <div class="card-group">
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