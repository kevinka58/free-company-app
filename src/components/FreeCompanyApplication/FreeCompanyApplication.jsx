import React from 'react';
import FreeCompanyDetailPage from '../../pages/FreeCompanyDetailPage/FreeCompanyDetailPage';

export default function FreeCompanyApplication({ comments, handleDeleteFreeCompany }) {
    return (
        <>
        <div className="FreeCompanyListing">
            <div>Character Name: {comments.characterName}</div> 
            <div>Character Level: {comments.charLevel}</div>
            <div>Preffered Role: {comments.prefRole}</div>
            <div>About You: {comments.content}</div>
			</div>
            <FreeCompanyDetailPage comments={comments} />
            </>
	);
}
