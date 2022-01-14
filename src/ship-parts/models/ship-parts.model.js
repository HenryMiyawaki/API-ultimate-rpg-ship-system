const moongose = require('mongoose');

const shipPartsSchema = new moongose.Schema({
    name: { type: String, required: true },
    health: { type: Number, required: true },
    ranking: { type: Number, required: true },
    description: { type: String },
    modifiers: [{}],
});

const ShipParts = moongose.model('ShipParts', shipPartsSchema);
module.exports = ShipParts;