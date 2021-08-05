import React, {Component, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FreeCompanyCard from '../../components/FreeCompanyCard/FreeCompanyCard';

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
        console.log('form:', formData)
        console.log('INSIDE HANDLE SUBMIT FUNCTION')
        props.handleAddComment(formData, freeCompany._id);
    }
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const {
		state: { freeCompany, comment },
	} = useLocation();

	return (
		<>
			<h1>Free Company Details</h1>
			<FreeCompanyCard freeCompany={freeCompany} key={freeCompany._id} />
            <div className="FreeCompanyListing">
                </div>
                <table id="comment-section" class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>{freeCompany.comments.map((c, index) => (
                            <td key={index}><strong>Character Name: </strong>{c.characterName} | <strong>Character Level: </strong>{c.charLevel} | <strong>Prefered Role: </strong>{c.prefRole} | <strong>About You!: </strong>{c.content} 
                            <Link className='btn btn-xs btn-info'
                             to={{
                                pathname: '/editcomment',
                                state: {comment, freeCompany},
                                 }}
                                >
                                    Edit
                            </Link> 
                                    <button 
                                    onClick={() => props.handleDeleteComment(freeCompany._id, c._id)} >DELETE
                                    </button>
                                    </td>
                            ))} 
                        </tr>
                    </tbody>
                </table>
           
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
