const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

router.post('/freeCompanies/:id/comments', commentsCtrl.create);
router.delete('/freeCompanies/:id/:index', commentsCtrl.delete);
router.put('/freeCompanies/:id/:index', commentsCtrl.update);

module.exports = router;
