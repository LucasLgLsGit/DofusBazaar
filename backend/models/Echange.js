const mongoose = require('mongoose');

const echangeSchema = new mongoose.Schema({
    num: { type: Number, required: true, unique: true },
	type: { 
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Type',
		required: true
	},
    prix_achat: { type: Number, required: true },
	prix_estime: { type: Number, required: true},
});

module.exports = mongoose.model('Echange', echangeSchema);
