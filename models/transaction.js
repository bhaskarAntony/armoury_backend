const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    officer: { type:String},
    weapons: [{ type: String}],
    weaponsIds:{type:Array},
    issueDate: { type: Date, default: Date.now },
    returnDate: Date,
    used: { type: Boolean, default: false },
    purpose: String,
});

module.exports = mongoose.model('Transaction', transactionSchema);
