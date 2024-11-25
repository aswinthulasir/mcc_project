const express = require('express');
const router = express.Router();
const { getAllGenders, addGender, updateGender, deleteGender } = require('../controllers/genderController');

router.get('/', getAllGenders); // Get all genders
router.post('/', addGender); // Add new gender
router.put('/:id', updateGender); // Update gender by ID
router.delete('/:id', deleteGender); // Delete gender by ID

module.exports = router;