// backend/models/event.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  location: { type: String, trim: true },
  category: { type: String, trim: true },
  date: { type: Date },
  organizer: { type: String, trim: true },
  ticketPrice: { type: Number },
  // ... other fields
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;