const router = require('express').Router();
const Event = require('../models/event.model');

// Get all events
router.route('/').get(async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events', error: err });
  }
});

// Get a specific event by ID
router.route('/:id').get(async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching event', error: err });
  }
});

module.exports = router;