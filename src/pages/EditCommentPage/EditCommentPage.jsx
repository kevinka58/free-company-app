import React, {Component, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'

function EditCommentPage(props){
    const location = useLocation();

    const[invalidForm, setValidForm] = useState(true)
    const [formData, setFormData] = useState(location.state.freeCompany);
    const freeCompany = useState(location.state.freeCompany)

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdateComment(freeCompany, formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return(
        <>
        <h1>Edit your listing</h1>
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
                <label>Character (Preffered Job) Level:</label>
                <input className="form-control"
                name="charLevel"
                value={formData.charLevel}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Preffered Role:</label>
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
                <label>About You!</label>
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
            UPDATE FREE COMPANY
            </button>
            &nbsp;&nbsp;
            <Link to='freeCompanies/listing'>CANCEL</Link>
        </form> 
        </>
        )  

}

export default EditCommentPage;