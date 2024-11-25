const db = require('../config/db');

// Get all genders
exports.getAllGenders = (req, res) => {
    const sql = 'SELECT * FROM Gender';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
};

// Add a new gender
exports.addGender = (req, res) => {
    const { gender_name } = req.body;
    if (!gender_name) {
        return res.status(400).json({ error: 'Gender name is required' });
    }
    const sql = 'INSERT INTO Gender (gender_name) VALUES (?)';
    db.query(sql, [gender_name], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Gender added successfully', id: result.insertId });
        }
    });
};

// Update gender by ID
exports.updateGender = (req, res) => {
    const { id } = req.params;
    const { gender_name } = req.body;
    if (!gender_name) {
        return res.status(400).json({ error: 'Gender name is required' });
    }
    const sql = 'UPDATE Gender SET gender_name = ? WHERE id = ?';
    db.query(sql, [gender_name, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Gender not found' });
        } else {
            res.status(200).json({ message: 'Gender updated successfully' });
        }
    });
};

// Delete gender by ID
exports.deleteGender = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM Gender WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Gender not found' });
        } else {
            res.status(200).json({ message: 'Gender deleted successfully' });
        }
    });
};
