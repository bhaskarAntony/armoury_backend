const mongoose = require('mongoose');

const officerSchema = new mongoose.Schema({
    name: { type: String},
    status:{
        type:String,
        enum: ['returned', 'recieved'], 
        default: 'returned'
    },
    metalNo:{
        type:String,
        required:true
    },
    rank:{
        type:String,
        required:true
    },
    duty:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Officer', officerSchema);
