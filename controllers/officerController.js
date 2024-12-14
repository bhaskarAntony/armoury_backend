const Officer = require('../models/officer');

exports.createOfficer = async (req, res) => {
    try {
        const officer = new Officer(req.body);
        await officer.save();
        res.status(201).json({ message: 'Officer created successfully', officer });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllOfficers = async (req, res) => {
    try {
        const officers = await Officer.find();
        res.status(200).json(officers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateOfficer = async (req, res) => {
    const { id } = req.params; // Get officer ID from request parameters
    const { name, rank, metalNo, duty, status } = req.body; // Get the updated data from the request body

    try {
        // Find the officer by ID and update the details
        const officer = await Officer.findByIdAndUpdate(
            id,
            { name, rank, metalNo, duty, status }, // Update fields
            { new: true } // Return the updated document
        );

        if (!officer) {
            return res.status(404).json({ message: 'Officer not found' });
        }

        // Send the updated officer as the response
        res.json({
            message:'updated',
            data:officer
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getOfficerById = async (req, res) => {
    const { id } = req.params;  // Get officer ID from request parameters

    try {
        // Find the officer by ID
        const officer = await Officer.findById(id);

        if (!officer) {
            return res.status(404).json({ message: 'Officer not found' });
        }

        // Send the officer as the response
        res.json(officer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
