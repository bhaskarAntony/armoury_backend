const express = require('express');
const { createOfficer, getAllOfficers, updateOfficer, getOfficerById } = require('../controllers/officerController');

const router = express.Router();

router.post('/', createOfficer);
router.get('/', getAllOfficers);
router.put('/edit/:id', updateOfficer);
router.get('/:id', getOfficerById);

module.exports = router;
