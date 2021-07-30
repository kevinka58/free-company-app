const FreeCompany = require('../../models/freeCompany');

module.exports = {
	index,
	show,
	create,
	update,
	delete: deleteOne
};

async function index(req, res) {
	const freeCompanies = await FreeCompany.find({});
	res.status(200).json(freeCompanies);
}

async function show(req, res) {
	const freeCompany = await FreeCompany.findById(req.params.id);
	res.json(freeCompany);
}

async function create(req, res){
    const freeCompany = await FreeCompany.create(req.body);
    res.status(201).json(freeCompany);
}

async function update(req, res) {
	const updatedFreeCompany = await FreeCompany.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedFreeCompany);
}

async function deleteOne(req, res) {
	const deletedFreeCompany = await FreeCompany.findByIdAndRemove(req.params.id);
	res.status(200).json(deletedFreeCompany);
}
