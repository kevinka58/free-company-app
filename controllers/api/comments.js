const FreeCompany = require("../../models/freeCompany");
const { patch } = require("../../routes/api/freeCompanies");

module.exports = {
  create,
  delete: deleteComment,
  update,
};

async function create(req, res) {
  const freeCompany = await FreeCompany.findById(req.params.id);
  freeCompany.comments.push(req.body);
  await freeCompany.save();
  res.status(200).json(freeCompany)
}

async function update(req, res) {
  const freeCompany = await FreeCompany.findById(req.params.id)
  const originalComment = freeCompany.comments.find((comment) => {
    return req.params.commentId == comment._id
  })
  const index = freeCompany.comments.indexOf(originalComment)
  const updatedComment = freeCompany.comments.create(req.body)
  freeCompany.comments.splice(index, 1, updatedComment)
  await freeCompany.save();
  res.status(200).json(freeCompany);
}

async function deleteComment(req, res) {
  const freeCompany = await FreeCompany.findById(req.params.id);
  freeCompany.comments.remove(req.params.commentId);
  await freeCompany.save()
  res.status(200).json(freeCompany);
}
