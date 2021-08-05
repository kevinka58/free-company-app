import React, {Component, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FreeCompanyCard from '../../components/FreeCompanyCard/FreeCompanyCard';

function FreeCompanyDetailPage(props) {
    const [invalidForm, setValidForm] = useState(true)
    const [formData, setFormData] = useState({
        content: '',
        characterName: 'First - Surname',
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
                    <div>
                    <div>
                    <div></div>
                        <div class="card text-dark bg-light mb-3 bg-opacity-90" style={{ width: 350}}>{freeCompany.comments.map((c, index) => (
                            <div class="card-body"  key={index}>
                            <div class="card-header">Application</div>
                            <div class="list-group-item"><strong>Character Name: </strong>{c.characterName}</div>
                            <div class="list-group-item"><strong>Character Level: </strong>{c.charLevel}</div>
                            <div class="list-group-item"><strong>Prefered Role: </strong>{c.prefRole}</div>
                            <div class="list-group-item"><strong>About You!: </strong>{c.content}</div>
                            &nbsp;
                            <Link className='btn btn-outline-info'
                             to={{
                                 pathname: '/editcomment',
                                 state: {comment, freeCompany},
                                }}
                                >
                                    Edit
                            </Link> 
                                    <button class="btn btn-outline-info"
                                    onClick={() => props.handleDeleteComment(freeCompany._id, c._id)} >DELETE
                                    </button>
                                    </div>
                            ))} 
                        </div>
                            </div>
                            </div>
                            
      
            <h1>Apply Here!</h1>
            <form  ref={formRef} onSubmit={handleSubmit}>
            <div class="form-group">
                <label>Character Name:</label>
                <input 
                class="form-control"
                name="characterName"
                value={formData.characterName}
                onChange={handleChange}
                required
                />
            </div>
            <div class="form-group">
                <label>Character (Preffered Job) Level: </label>
                <input class="form-control"
                name="charLevel"
                value={formData.charLevel}
                onChange={handleChange}
                required
                />
            </div>
            <div class="form-group">
                <label>Preffered Role: </label>
                <select
                class="form-control"
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
            <div class="form-group">
                <label>About you!</label>
                <input class="form-control"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit"
            class="btn btn-success"
            disabled={invalidForm}
            >
            ADD APPLICATION
            </button>
        </form>   
        </>
	);
}

export default FreeCompanyDetailPage;
