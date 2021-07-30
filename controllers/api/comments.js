const FreeCompany = require('../models/freeCompany')

module.exports = {
    create,
    delete: deleteComment,
    update,
}


async function create(req, res){
    const newComment = await FreeCompany.findById(req.params.id);
    newComment.push(req.body)
    res.status(201).json(newComment)
}


async function update(req, res) {
	const updatedComment = await FreeCompany.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedComment);
}

async function deleteComment(req, res) {
	const deletedComment= await FreeCompany.findByIdAndRemove(req.params.id);
	res.status(200).json(deletedComment);
}
