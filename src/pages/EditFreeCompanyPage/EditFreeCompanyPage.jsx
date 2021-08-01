import React, {Component, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'

function EditFreeCompany(props){
    const location = useLocation();

    const[invalidForm, setValidForm] = useState(true)
    const [formData, setFormData] = useState(location.state.freeCompany);

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdateFreeCompany(formData);
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
                <label>Free Company's Name:</label>
                <input 
                className="form-control"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Company Tag:</label>
                <input className="form-control"
                name="companyTag"
                value={formData.companyTag}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Server Name:</label>
                <select
                className="form-control"
                name="serverName"
                value={formData.serverName}
                onChange={handleChange}
                required
                >
				<option value="Exodus">Exodus</option>
				</select>
            </div>
			<div className="form-group">
                <label>Number of Members:</label>
                <input className="form-control"
                name="companyPop"
                value={formData.companyPop}
                onChange={handleChange}
                required
                />
            </div>
			<div className="form-group">
                <label>Company Rank:</label>
                <input className="form-control"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                required
                />
            </div>
			<div className="form-group">
                <label>Grand Company:</label>
                <select className="form-control"
                name="grandCompany"
                value={formData.grandCompany}
                onChange={handleChange}
                required
                >
				<option value="The Immortal Flames">The Immortal Flames</option>
				</select>
            </div>
            <button type="submit"
            className="btn"
            disabled={invalidForm}
            >
            <div className="form-group">
            <label>Company Motto</label>
            <input className="form-control"
            name="companyMotto"
            value={formData.companyMotto}
            onChange={handleChange}
            required
                />
            </div>
            UPDATE FREE COMPANY
            </button>
            &nbsp;&nbsp;
            <Link to='freeCompanies/listing'>CANCEL</Link>
        </form> 
        </>
        )  

}

export default EditFreeCompany;