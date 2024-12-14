const express = require('express');
const { createWeapon, getAllWeapons, getSingleWeapons, updateWeapon } = require('../controllers/weaponController');

const router = express.Router();

router.post('/', createWeapon);
router.get('/', getAllWeapons);
router.get('/single/:id', getSingleWeapons);
router.patch('/update/:id', updateWeapon);

module.exports = router;
