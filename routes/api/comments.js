const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

router.post('/freeCompanies/:id/comments', commentsCtrl.create);
router.delete('/freeCompanies/:id/comments/:commentId', commentsCtrl.delete);
router.put('/freeCompanies/:id/comments/:commentId', commentsCtrl.update);

module.exports = router;
