const mongoose = require("mongoose");
const { Schema } = mongoose;

const countrySchema = new Schema({
	code: { type: String, required: true, unique: true },
	name: { type: String, required: true, unique: true },
	status: String,
}, { timestamps: true })

module.exports = mongoose.model('Country', countrySchema)