const Weapon = require('../models/weapon');

exports.createWeapon = async (req, res) => {
    try {
        const weapon = new Weapon(req.body);
        await weapon.save();
        res.status(201).json({ message: 'Weapon created successfully', weapon });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllWeapons = async (req, res) => {
    try {
        const weapons = await Weapon.find();
        res.status(200).json(weapons);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getSingleWeapons = async (req, res) => {
    const { id } = req.params;

    // // Validate ID format
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(400).json({ error: 'Invalid weapon ID format.' });
    // }

    try {
        // Find the weapon by ID
        const weapon = await Weapon.findById(id);
        if (!weapon) {
            return res.status(404).json({ error: 'Weapon not found.' });
        }
        res.status(200).json(weapon);
    } catch (error) {
        // General error handling
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
};
exports.updateWeapon = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        // Check if weapon exists
        const weapon = await Weapon.findById(id);
        if (!weapon) {
            return res.status(404).json({ error: 'Weapon not found.' });
        }

        // Update weapon with new data
        const updatedWeapon = await Weapon.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        res.status(200).json({ message: 'Weapon updated successfully', updatedWeapon });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteWeapon = async (req, res) => {
    const { id } = req.params;

    try {
        // Check if weapon exists
        const weapon = await Weapon.findById(id);
        if (!weapon) {
            return res.status(404).json({ error: 'Weapon not found.' });
        }

        // Delete weapon
        await Weapon.findByIdAndDelete(id);
        res.status(200).json({ message: 'Weapon deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
