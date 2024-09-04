const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    sessionType: { type: String, enum: ['one-on-one', 'group'], required: true },
});

module.exports = mongoose.model('Session', SessionSchema);
