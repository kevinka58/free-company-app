import React, {Component, useState, useEffect, useRef } from 'react';

function NewFreeCompany(props){
    const[invalidForm, setValidForm] = useState(true)
    const [formData, setFormData] = useState({
        companyName: '',
        companyTag: 'Ex: FFXIV',
        serverName: "Adamantoise",
		companyPop: '0',
		rank: '0',
		grandCompany: "The Immortal Flames",
		companyMotto: '',
    });

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    },);

    const handleSubmit = (e) => {
        e.preventDefault()
		console.log('form:', formData)
        console.log('INSIDE HANDLE SUBMIT FUNCTION')
        props.handleAddFreeCompany(formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return(
        <>
        <h1 class="titleContainer"><span class="titleColor">Add</span> your Free Company Listing</h1>
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
				<option value="Adamantoise">Adamantoise</option>
				<option value="Cactuar">Cactuar</option>
				<option value="Faerie">Faerie</option>
				<option value="Gilgamesh">Gilgamesh</option>
				<option value="Jenova">Jenova</option>
				<option value="Midgardsormr">Midgardsormr</option>
				<option value="Sargatanas">Sargatanas</option>
				<option value="Siren">Siren</option>
				<option value="Balmung">Balmung</option>
				<option value="Brynhildr">Brynhildr</option>
				<option value="Coeurl">Coeurl</option>
				<option value="Diabolos">Diabolos</option>
				<option value="Goblin">Goblin</option>
				<option value="Malboro">Malboro</option>
				<option value="Mateus">Mateus</option>
				<option value="Zalera">Zalera</option>
				<option value="Behemoth">Behemoth</option>
				<option value="Excalibur">Excalibur</option>
				<option value="Exodus">Exodus</option>
				<option value="Famfrit">Famfrit</option>
				<option value="Hyperion">Hyperion</option>
				<option value="Lamia">Lamia</option>
				<option value="Leviathan">Leviathan</option>
				<option value="Ultros">Ultros</option>
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
				<option value="The Maelstrom">The Maelstrom</option>
				<option value="The Order of the Twin Adder">The Order of the Twin Adder</option>
				</select>
				</div>
			<div className="form-group">
				<label>Company Motto: </label>
				<input className="form-control"
				name="companyMotto"
				value={formData.companyMotto}
				onChange={handleChange}
				required
					/>
			</div>
            <button type="submit"
            className="btn btn-success"
            disabled={invalidForm}
            >
            ADD FREE COMPANY
            </button>
        </form> 
        </>
        )  

}

export default NewFreeCompany;