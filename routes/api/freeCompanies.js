const express = require('express');
const router = express.Router();
const freeCompaniesCtrl = require('../../controllers/api/freeCompanies');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, freeCompaniesCtrl.index);
router.get('/:id', ensureLoggedIn, freeCompaniesCtrl.show);
router.post('/', ensureLoggedIn, freeCompaniesCtrl.create);
router.put('/:id', ensureLoggedIn, freeCompaniesCtrl.update);
router.delete('/:id', ensureLoggedIn, freeCompaniesCtrl.delete);

module.exports = router;
