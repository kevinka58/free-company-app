const FreeCompany = require("../../models/freeCompany");
const mongoose = require("mongoose");

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
  const updatedFreeCompany = await FreeCompany.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedFreeCompany);
}

async function deleteComment(req, res) {
  const deletedComment = await FreeCompany.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedComment);
}
