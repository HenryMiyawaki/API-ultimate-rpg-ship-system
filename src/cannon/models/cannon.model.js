const moongose = require('mongoose');

const cannonSchema = new moongose.Schema({
    nome: { type: String, required: true },
    damage: { type: Number, required: true },
    ranking: { type: Number, required: true },
    range: { type: Number, required: true },
    description: { type: String },
    modifiers: [{}],
});

const Cannon = moongose.model('Cannon', cannonSchema);
module.exports = Cannon;