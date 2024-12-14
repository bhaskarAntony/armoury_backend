const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
    type: { type: String, required: true },
    registerNumber: { type: String, unique: true, required: true },
    buttno: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['In Service', 'Under Maintenance', 'Missing', 'Expired', 'issued'], 
        default: 'In Service'
    },
    fixedToOfficer: { 
        type: {
            rank: String,
            metalno: String,
            officername: String
        },
        default: null
    },
    coy: String,
    rackNumber: String,
    lastAuditBy: String,
    repairHistory: [String],
    upcomingMaintenanceDate: Date,
    image:String
});

module.exports = mongoose.model('KSPWeapon', weaponSchema);
