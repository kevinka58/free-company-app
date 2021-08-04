const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

router.post('/freeCompanies/:id/comments', commentsCtrl.create);
router.delete('/freeCompanies/:id/comments/:commentId', commentsCtrl.delete);
router.put('/comments/:id', commentsCtrl.update);

module.exports = router;
