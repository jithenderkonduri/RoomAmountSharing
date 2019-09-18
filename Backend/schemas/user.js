var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: [true, 'Email is required'], unique: [true, 'Email is already exists'] },
});

module.exports = userSchema;
