import React, {Component, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import FreeCompanyCard from '../../components/FreeCompanyCard/FreeCompanyCard';
import FreeCompanyApplication from '../../components/FreeCompanyApplication/FreeCompanyApplication'

function FreeCompanyDetailPage(props) {

    const [invalidForm, setValidForm] = useState(true)
    const [formData, setFormData] = useState({
        content: '',
        characterName: '',
        charLevel: "0",
        prefRole: 'Tank',
    });
    
    const formRef = useRef();
    
    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    });
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddComment(formData);
    }
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const {
		state: { freeCompany },
	} = useLocation();

	return (
		<>
			<h1>Free Company Details</h1>
			<FreeCompanyCard freeCompany={freeCompany} key={freeCompany._id} />
            <div>
			<FreeCompanyApplication comments={props.comments} key={props.comments._id} />
            </div>
            
            <h1>Apply Here!</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Character Name:</label>
                <input 
                className="form-control"
                name="characterName"
                value={formData.characterName}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Character (Preffered Job) Level: </label>
                <input className="form-control"
                name="charLevel"
                value={formData.charLevel}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Preffered Role: </label>
                <select
                className="form-control"
                name="prefRole"
                value={formData.prefRole}
                onChange={handleChange}
                required
                >
                <option value="Tank">Tank</option>
                <option value="Healer">Healer</option>
                <option value="Damage (DPS)">Damage (DPS)</option>
                </select>
            </div>
            <div className="form-group">
                <label>About you!</label>
                <input className="form-control"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit"
            className="btn"
            disabled={invalidForm}
            >
            ADD APPLICATION
            </button>
        </form> 
		</>
	);
}

export default FreeCompanyDetailPage;
