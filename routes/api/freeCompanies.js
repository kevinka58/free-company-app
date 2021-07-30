const express = require('express');
const router = express.Router();
const freeCompaniesCtrl = require('../../controllers/api/freeCompanies');

router.get('/', freeCompaniesCtrl.index);
router.get('/:id', freeCompaniesCtrl.show);
router.post('/', freeCompaniesCtrl.create);
router.put('/:id', freeCompaniesCtrl.update);
router.delete('/:id', freeCompaniesCtrl.delete);

module.exports = router;
